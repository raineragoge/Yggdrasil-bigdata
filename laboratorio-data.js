window.YGG_LAB = [
  {
    "id": "cmd1",
    "group": "entorno",
    "context": "Host · PowerShell",
    "title": "Iniciar contenedor Docker",
    "cmd": "docker start hadoop",
    "desc": "Inicia el contenedor que ya existe. No descarga ni crea una imagen nueva.",
    "tone": "host"
  },
  {
    "id": "cmd2",
    "group": "entorno",
    "context": "Host · PowerShell",
    "title": "Entrar al contenedor Linux",
    "cmd": "docker exec -it hadoop bash",
    "desc": "Abre una shell dentro del contenedor en ejecución.",
    "tone": "host"
  },
  {
    "id": "cmd3",
    "group": "entorno",
    "context": "Contenedor · Linux",
    "title": "Arrancar SSH",
    "cmd": "service ssh start",
    "desc": "El entorno de clase necesita el servicio SSH para algunas operaciones de Hadoop.",
    "tone": "container"
  },
  {
    "id": "cmd4",
    "group": "entorno",
    "context": "Contenedor · Linux",
    "title": "Arrancar HDFS",
    "cmd": "start-dfs.sh",
    "desc": "Inicia los servicios de HDFS del entorno configurado.",
    "tone": "container"
  },
  {
    "id": "cmd5",
    "group": "entorno",
    "context": "Contenedor · Linux",
    "title": "Comprobar servicios",
    "cmd": "jps",
    "desc": "Busca NameNode, DataNode y SecondaryNameNode.",
    "tone": "container"
  },
  {
    "id": "cmd6",
    "group": "entorno",
    "context": "Contenedor · Linux",
    "title": "Arrancar YARN (opcional)",
    "cmd": "start-yarn.sh",
    "desc": "Solo si vas a utilizar YARN en la práctica.",
    "tone": "container"
  },
  {
    "id": "cmd7",
    "group": "hdfs",
    "context": "Contenedor · Linux",
    "title": "Listar directorio raíz",
    "cmd": "hdfs dfs -ls /",
    "desc": "Lista elementos HDFS; no confundir con ls / del contenedor.",
    "tone": "hdfs"
  },
  {
    "id": "cmd8",
    "group": "hdfs",
    "context": "Contenedor · Linux",
    "title": "Crear una ruta para ventas",
    "cmd": "hdfs dfs -mkdir -p /ventas/2026/10/04",
    "desc": "Crea directorios intermedios si faltan.",
    "tone": "hdfs"
  },
  {
    "id": "cmd9",
    "group": "hdfs",
    "context": "Contenedor · Linux",
    "title": "Subir un CSV",
    "cmd": "hdfs dfs -put /tmp/ventas_entrada/ventas_2026-10-04_09.csv /ventas/2026/10/04/",
    "desc": "Lee el archivo desde el contenedor y lo sube a HDFS. Necesita existir en esa ruta.",
    "tone": "hdfs"
  },
  {
    "id": "cmd10",
    "group": "hdfs",
    "context": "Contenedor · Linux",
    "title": "Descargar un CSV",
    "cmd": "hdfs dfs -get /ventas/2026/10/04/ventas_2026-10-04_09.csv /tmp/",
    "desc": "Copia desde HDFS hacia la carpeta /tmp del contenedor.",
    "tone": "hdfs"
  },
  {
    "id": "cmd11",
    "group": "hdfs",
    "context": "Contenedor · Linux",
    "title": "Leer un archivo",
    "cmd": "hdfs dfs -cat /ventas/2026/10/04/ventas_2026-10-04_09.csv",
    "desc": "Imprime su contenido por pantalla.",
    "tone": "hdfs"
  },
  {
    "id": "cmd12",
    "group": "hdfs",
    "context": "Contenedor · Linux",
    "title": "Ver el comienzo de un archivo",
    "cmd": "hdfs dfs -head /ventas/2026/10/04/ventas_2026-10-04_09.csv",
    "desc": "Muestra solo el principio del CSV.",
    "tone": "hdfs"
  },
  {
    "id": "cmd13",
    "group": "hdfs",
    "context": "Contenedor · Linux",
    "title": "Evitar duplicados",
    "cmd": "hdfs dfs -test -e /ventas/2026/10/04/ventas_2026-10-04_09.csv",
    "desc": "Devuelve un estado de éxito si existe, útil para scripts con if.",
    "tone": "hdfs"
  },
  {
    "id": "cmd14",
    "group": "scripts",
    "context": "Contenedor · Linux",
    "title": "Ejecutar script de subida",
    "cmd": "bash /root/subir_ventas.sh",
    "desc": "Ejecuta el script de práctica si existe en esta ruta. Si tu archivo se llama subir_archivos.sh, usa ese nombre.",
    "tone": "container"
  },
  {
    "id": "cmd15",
    "group": "scripts",
    "context": "Contenedor · Linux",
    "title": "Comprobar archivos cargados",
    "cmd": "hdfs dfs -ls /ventas/2026/10/04",
    "desc": "Permite verificar qué ha llegado a HDFS.",
    "tone": "hdfs"
  },
  {
    "id": "cmd16",
    "group": "apagar",
    "context": "Contenedor · Linux",
    "title": "Parar YARN (solo si está iniciado)",
    "cmd": "stop-yarn.sh",
    "desc": "Detiene los servicios YARN correspondientes.",
    "tone": "container"
  },
  {
    "id": "cmd17",
    "group": "apagar",
    "context": "Contenedor · Linux",
    "title": "Parar HDFS",
    "cmd": "stop-dfs.sh",
    "desc": "Detiene los servicios HDFS antes de detener el contenedor.",
    "tone": "container"
  },
  {
    "id": "cmd18",
    "group": "apagar",
    "context": "Host · PowerShell",
    "title": "Salir al host y detener Docker",
    "cmd": "docker stop hadoop",
    "desc": "Ejecuta este comando desde PowerShell, no dentro del contenedor.",
    "tone": "host"
  },
  {
    "id": "atm1",
    "group": "atm",
    "context": "Host · PowerShell",
    "title": "Entrar en Docker (ATM)",
    "cmd": "docker exec -it stupefied_ramanujan /bin/bash",
    "desc": "Contenedor del ejercicio ATM, distinto del contenedor hadoop de ventas.",
    "tone": "host"
  },
  {
    "id": "atm2",
    "group": "atm",
    "context": "Contenedor · Linux / Beeline",
    "title": "Conectar con Hive",
    "cmd": "beeline -u 'jdbc:hive2://localhost:10000/default' -n root\nUSE clase_bigdata;\nSELECT current_database();",
    "desc": "Las líneas USE y SELECT se introducen dentro de Beeline; para salir: !quit.",
    "tone": "container"
  },
  {
    "id": "atm3",
    "group": "atm",
    "context": "Contenedor · Linux",
    "title": "Crear CSV bancario",
    "cmd": "mkdir -p /root/atm/entrada\nprintf '%s\\n' \\\n'id_transaccion,cajero_id,tipo_operacion,importe' \\\n'T001,ATM001,retirada,100.00' \\\n'T002,ATM002,ingreso,250.00' \\\n'T003,ATM003,retirada,50.00' \\\n'T004,ATM001,retirada,80.00' \\\n'T005,ATM002,ingreso,150.00' > /root/atm/entrada/transacciones_cajero_20261019.csv\ncat /root/atm/entrada/transacciones_cajero_20261019.csv",
    "desc": "Datos reales de la simulación: 5 transacciones del 19/10/2026.",
    "tone": "container"
  },
  {
    "id": "atm4",
    "group": "atm",
    "context": "Contenedor · Linux / HDFS",
    "title": "Subir CSV a HDFS",
    "cmd": "hdfs dfs -mkdir -p /banco/atm/raw/fecha=2026-10-19\nhdfs dfs -put /root/atm/entrada/transacciones_cajero_20261019.csv /banco/atm/raw/fecha=2026-10-19/\nhdfs dfs -ls /banco/atm/raw/fecha=2026-10-19/",
    "desc": "Comprobado fichero de 184 bytes en la partición de fecha.",
    "tone": "hdfs"
  },
  {
    "id": "atm5",
    "group": "atm",
    "context": "Beeline · HiveQL",
    "title": "Crear tabla CSV externa",
    "cmd": "CREATE EXTERNAL TABLE IF NOT EXISTS transacciones_atm_raw (\n    id_transaccion STRING,\n    cajero_id STRING,\n    tipo_operacion STRING,\n    importe DECIMAL(10,2)\n)\nPARTITIONED BY (fecha STRING)\nROW FORMAT DELIMITED\nFIELDS TERMINATED BY ','\nSTORED AS TEXTFILE\nLOCATION '/banco/atm/raw'\nTBLPROPERTIES (\"skip.header.line.count\"=\"1\");",
    "desc": "Definición de esquema, separación por comas, cabecera y ruta HDFS.",
    "tone": "container"
  },
  {
    "id": "atm6",
    "group": "atm",
    "context": "Beeline · HiveQL",
    "title": "Registrar particiones Hive",
    "cmd": "MSCK REPAIR TABLE transacciones_atm_raw;\nSHOW PARTITIONS transacciones_atm_raw;",
    "desc": "Resultado observado: fecha=2026-10-19.",
    "tone": "container"
  },
  {
    "id": "atm7",
    "group": "atm",
    "context": "Beeline · HiveQL",
    "title": "Consultar CSV en Hive",
    "cmd": "SELECT * FROM transacciones_atm_raw WHERE fecha='2026-10-19';",
    "desc": "Consulta de las 5 filas de T001 a T005 comprobada.",
    "tone": "container"
  },
  {
    "id": "atm8",
    "group": "atm",
    "context": "Beeline · HiveQL",
    "title": "Crear tabla Parquet",
    "cmd": "CREATE TABLE IF NOT EXISTS transacciones_atm_parquet (\n    id_transaccion STRING,\n    cajero_id STRING,\n    tipo_operacion STRING,\n    importe DECIMAL(10,2)\n)\nPARTITIONED BY (fecha STRING)\nSTORED AS PARQUET;",
    "desc": "Destino columnar y particionado por fecha.",
    "tone": "container"
  },
  {
    "id": "atm9",
    "group": "atm",
    "context": "Beeline · HiveQL",
    "title": "Transformar CSV a Parquet",
    "cmd": "INSERT OVERWRITE TABLE transacciones_atm_parquet\nPARTITION (fecha='2026-10-19')\nSELECT id_transaccion, cajero_id, tipo_operacion, importe\nFROM transacciones_atm_raw\nWHERE fecha='2026-10-19';",
    "desc": "INSERT OVERWRITE sustituye partición sin duplicar registros.",
    "tone": "container"
  },
  {
    "id": "atm10",
    "group": "atm",
    "context": "Beeline · HiveQL",
    "title": "Comprobar agregados Parquet",
    "cmd": "SELECT COUNT(*) AS num_transacciones,\n       SUM(importe) AS importe_total\nFROM transacciones_atm_parquet\nWHERE fecha='2026-10-19';",
    "desc": "Salida verificada: 5 transacciones y SUM(importe)=630.00; no es saldo neto.",
    "tone": "container"
  },
  {
    "id": "atm11",
    "group": "atm",
    "context": "Contenedor · Linux",
    "title": "Crear script de ingesta Bash",
    "cmd": "mkdir -p /root/atm\ncat > /root/atm/subir_atm.sh <<'EOF'\n#!/bin/bash\nset -e\nFECHA=\"${1:-$(date +%Y%m%d)}\"\nARCHIVO=\"/root/atm/entrada/transacciones_cajero_${FECHA}.csv\"\nDIA=\"${FECHA:0:4}-${FECHA:4:2}-${FECHA:6:2}\"\nDESTINO=\"/banco/atm/raw/fecha=$DIA\"\nif [ ! -f \"$ARCHIVO\" ]; then\n  echo \"No existe: $ARCHIVO\"\n  exit 1\nfi\nhdfs dfs -mkdir -p \"$DESTINO\"\nif hdfs dfs -test -e \"$DESTINO/$(basename \"$ARCHIVO\")\"; then\n  echo \"El archivo ya existe en HDFS\"\nelse\n  hdfs dfs -put \"$ARCHIVO\" \"$DESTINO/\"\n  echo \"Archivo subido correctamente\"\nfi\n\n# Registrar particiones Hive\nbeeline -u 'jdbc:hive2://localhost:10000/clase_bigdata' -n root -e \"MSCK REPAIR TABLE transacciones_atm_raw;\"\n\n# Cargar la particion Hive en Parquet\nbeeline -u 'jdbc:hive2://localhost:10000/clase_bigdata' -n root -e \"\nINSERT OVERWRITE TABLE transacciones_atm_parquet\nPARTITION (fecha='$DIA')\nSELECT id_transaccion, cajero_id, tipo_operacion, importe\nFROM transacciones_atm_raw\nWHERE fecha='$DIA';\n\"\nEOF\nbash -n /root/atm/subir_atm.sh",
    "desc": "Script completo del repositorio; evita duplicados HDFS y actualiza Hive/Parquet.",
    "tone": "container"
  },
  {
    "id": "atm12",
    "group": "atm",
    "context": "Contenedor · Linux",
    "title": "Probar script con CSV existente",
    "cmd": "bash /root/atm/subir_atm.sh 20261019",
    "desc": "Se observó mensaje de archivo existente y Beeline finalizó correctamente (~21 s Parquet).",
    "tone": "container"
  },
  {
    "id": "atm13",
    "group": "atm",
    "context": "Contenedor · Ubuntu 18.04",
    "title": "Instalar Cron",
    "cmd": "cat /etc/os-release\napt-get update && apt-get install -y cron",
    "desc": "Ubuntu 18.04 Bionic. Cron no estaba instalado y se añadió con apt-get.",
    "tone": "container"
  },
  {
    "id": "atm14",
    "group": "atm",
    "context": "Contenedor · Linux",
    "title": "Iniciar y comprobar Cron",
    "cmd": "service cron start\nservice cron status",
    "desc": "El arranque automático durante la instalación fue bloqueado; se pidió iniciar manualmente.",
    "tone": "container"
  },
  {
    "id": "atm15",
    "group": "atm",
    "context": "Contenedor · Linux",
    "title": "Programar tarea cada día a la 01:00",
    "cmd": "if command -v hdfs >/dev/null && command -v beeline >/dev/null; then\n  {\n    printf 'PATH=%s\\n' \"$PATH\"\n    printf '0 1 * * * /bin/bash /root/atm/subir_atm.sh >> /root/atm/cron.log 2>&1\\n'\n  } | crontab -\n  crontab -l\nelse\n  echo 'ERROR: falta hdfs o beeline'\nfi",
    "desc": "crontab -l mostró PATH y la tarea diaria; hora según la zona del contenedor.",
    "tone": "container"
  },
  {
    "id": "atm16",
    "group": "atm",
    "context": "Contenedor · Linux",
    "title": "Revisar Cron y log",
    "cmd": "crontab -l\nservice cron status\ncat /root/atm/cron.log",
    "desc": "Aún no existía cron.log al consultar: no se había observado el primer disparo automático.",
    "tone": "container"
  }
];
