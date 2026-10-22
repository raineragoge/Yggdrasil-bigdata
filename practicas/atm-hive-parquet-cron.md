# Práctica ATM — Big Data 2 · 22/10/2026

## Objetivo
Procesar transacciones diarias de cajeros con el flujo **CSV → HDFS → Hive → Parquet → Bash → Crontab**. Implementación y prueba manual completadas. **Primera ejecución automática de Cron pendiente de comprobar**. No se hicieron CDC ni PySpark.

## Entorno
- Windows PowerShell (host). Docker `stupefied_ramanujan` (ID `ba7014e8d811`), Ubuntu 18.04.1 LTS.
- Hadoop 2.9.2, Hive 2.3.5, base de datos `clase_bigdata`, HiveServer2 en `localhost:10000`.
- Entrar desde PowerShell: `docker exec -it stupefied_ramanujan /bin/bash`.
- Para Beeline: `beeline -u 'jdbc:hive2://localhost:10000/default' -n root`, después `USE clase_bigdata;`. `!quit` vuelve a Bash.
- HiveServer2 se arrancó en este entorno mediante `nohup hiveserver2 --hiveconf hive.server2.enable.doAs=false > /tmp/hiveserver2.log 2>&1 &`.

## 1. CSV de entrada
Ruta local: `/root/atm/entrada/transacciones_cajero_20261019.csv`. El archivo reproducible también está en [`atm/transacciones_cajero_20261019.csv`](atm/transacciones_cajero_20261019.csv).

```csv
id_transaccion,cajero_id,tipo_operacion,importe
T001,ATM001,retirada,100.00
T002,ATM002,ingreso,250.00
T003,ATM003,retirada,50.00
T004,ATM001,retirada,80.00
T005,ATM002,ingreso,150.00
```

Comandos dentro del contenedor:
```bash
mkdir -p /root/atm/entrada
printf '%s\n' \
'id_transaccion,cajero_id,tipo_operacion,importe' \
'T001,ATM001,retirada,100.00' \
'T002,ATM002,ingreso,250.00' \
'T003,ATM003,retirada,50.00' \
'T004,ATM001,retirada,80.00' \
'T005,ATM002,ingreso,150.00' > /root/atm/entrada/transacciones_cajero_20261019.csv
cat /root/atm/entrada/transacciones_cajero_20261019.csv
```

## 2. HDFS
```bash
hdfs dfs -mkdir -p /banco/atm/raw/fecha=2026-10-19
hdfs dfs -put /root/atm/entrada/transacciones_cajero_20261019.csv /banco/atm/raw/fecha=2026-10-19/
hdfs dfs -ls /banco/atm/raw/fecha=2026-10-19/
```
Se confirmó un CSV de 184 bytes en esa carpeta. Los datos pertenecen al 19 de octubre, no al día en que se configuró Cron.

## 3. Hive: tabla externa CSV y particiones
Estos comandos SQL se ejecutan **dentro de Beeline**, no en la shell Bash:
```sql
CREATE EXTERNAL TABLE IF NOT EXISTS transacciones_atm_raw (
    id_transaccion STRING,
    cajero_id STRING,
    tipo_operacion STRING,
    importe DECIMAL(10,2)
)
PARTITIONED BY (fecha STRING)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS TEXTFILE
LOCATION '/banco/atm/raw'
TBLPROPERTIES ("skip.header.line.count"="1");

MSCK REPAIR TABLE transacciones_atm_raw;
SHOW PARTITIONS transacciones_atm_raw;
SELECT * FROM transacciones_atm_raw WHERE fecha='2026-10-19';
```
Verificado: partición `fecha=2026-10-19` y 5 filas correctas.

## 4. Parquet y consulta de control
```sql
CREATE TABLE IF NOT EXISTS transacciones_atm_parquet (
    id_transaccion STRING,
    cajero_id STRING,
    tipo_operacion STRING,
    importe DECIMAL(10,2)
)
PARTITIONED BY (fecha STRING)
STORED AS PARQUET;

INSERT OVERWRITE TABLE transacciones_atm_parquet
PARTITION (fecha='2026-10-19')
SELECT id_transaccion, cajero_id, tipo_operacion, importe
FROM transacciones_atm_raw
WHERE fecha='2026-10-19';

SELECT COUNT(*) AS num_transacciones,
       SUM(importe) AS importe_total
FROM transacciones_atm_parquet
WHERE fecha='2026-10-19';
```
**Resultado comprobado:** `num_transacciones=5`, `importe_total=630.00`. Como las retiradas y los ingresos tienen valores positivos, 630,00 es **suma de importes**, no saldo neto. `INSERT OVERWRITE` reemplaza la partición de destino. La ejecución utilizó Hive-on-MR, que mostró un aviso de deprecación; el proceso funcionó.

## 5. Bash: subir y actualizar de forma automática
El archivo fuente completo está en [`atm/subir_atm.sh`](atm/subir_atm.sh); se guardó como `/root/atm/subir_atm.sh` dentro de Docker:
```bash
#!/bin/bash
set -e
FECHA="${1:-$(date +%Y%m%d)}"
ARCHIVO="/root/atm/entrada/transacciones_cajero_${FECHA}.csv"
DIA="${FECHA:0:4}-${FECHA:4:2}-${FECHA:6:2}"
DESTINO="/banco/atm/raw/fecha=$DIA"
if [ ! -f "$ARCHIVO" ]; then
  echo "No existe: $ARCHIVO"
  exit 1
fi
hdfs dfs -mkdir -p "$DESTINO"
if hdfs dfs -test -e "$DESTINO/$(basename "$ARCHIVO")"; then
  echo "El archivo ya existe en HDFS"
else
  hdfs dfs -put "$ARCHIVO" "$DESTINO/"
  echo "Archivo subido correctamente"
fi

# Registrar particiones Hive
beeline -u 'jdbc:hive2://localhost:10000/clase_bigdata' -n root -e "MSCK REPAIR TABLE transacciones_atm_raw;"

# Cargar la particion Hive en Parquet
beeline -u 'jdbc:hive2://localhost:10000/clase_bigdata' -n root -e "
INSERT OVERWRITE TABLE transacciones_atm_parquet
PARTITION (fecha='$DIA')
SELECT id_transaccion, cajero_id, tipo_operacion, importe
FROM transacciones_atm_raw
WHERE fecha='$DIA';
"
```

Comprobación del script:
```bash
bash -n /root/atm/subir_atm.sh
bash /root/atm/subir_atm.sh 20261019
```
En la ejecución observada el script detectó que el archivo ya existía en HDFS; después Beeline ejecutó `MSCK REPAIR TABLE` e `INSERT OVERWRITE` correctamente (este último tardó ~21 segundos). El script toma la fecha actual (`YYYYMMDD`) si no recibe argumento.

## 6. Cron en Ubuntu 18.04
Al principio `command -v crontab` no devolvió nada. `apt-get` instaló Cron, pero el contenedor impidió iniciarlo automáticamente (`policy-rc.d denied execution of start`). Se indicó arranque manual:
```bash
apt-get update && apt-get install -y cron
service cron start
service cron status
command -v hdfs
command -v beeline
crontab -l
```

Se registró el PATH de la terminal y la tarea diaria con este bloque:
```bash
if command -v hdfs >/dev/null && command -v beeline >/dev/null; then
  {
    printf 'PATH=%s\n' "$PATH"
    printf '0 1 * * * /bin/bash /root/atm/subir_atm.sh >> /root/atm/cron.log 2>&1\n'
  } | crontab -
  crontab -l
else
  echo 'ERROR: falta hdfs o beeline'
fi
```

La salida **real** de `crontab -l` confirmó la línea:
```text
0 1 * * * /bin/bash /root/atm/subir_atm.sh >> /root/atm/cron.log 2>&1
```
Programación: todos los días a la **01:00 según la zona horaria del contenedor**.

## 7. Qué se comprobó y qué falta
- **Comprobado:** creación del CSV, subida HDFS, tabla externa y particiones Hive, consulta de 5 registros, conversión a Parquet, agregación 5 / 630.00, prueba del script Bash y registro de la tarea en `crontab -l`.
- **Pendiente:** observar un disparo automático real del servicio Cron. No se mostró la salida literal de `service cron status` tras el arranque, así que conviene verificarlo cuando se reabra el contenedor.
- Antes de la primera ejecución, `cat /root/atm/cron.log` devolvió `No such file or directory`: el archivo se crea cuando la tarea escribe por primera vez.
- Para funcionar a la hora fijada deben estar activos **Docker, Cron, HDFS y HiveServer2**. El contenedor puede perder los servicios arrancados manualmente después de detenerlo.
- Para cargar días nuevos, debe existir previamente `/root/atm/entrada/transacciones_cajero_YYYYMMDD.csv`; si falta, el script termina con un mensaje. No busca automáticamente CSV atrasados.
- Si se escribe `WHERE ...` en Bash tras cerrar la consulta SQL, aparecerá `bash: WHERE: command not found`. El comando correcto va dentro de Beeline o dentro de `beeline -e`.

## 8. Verificación futura
```bash
service cron status
crontab -l
cat /root/atm/cron.log
```
**Conclusión:** implementación de la práctica finalizada, con ejecución programada configurada pero aún sin una prueba end-to-end disparada por Cron.
