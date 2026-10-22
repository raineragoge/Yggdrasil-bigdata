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
