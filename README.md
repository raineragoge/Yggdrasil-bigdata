# Yggdrasil Big Data · Versión V4

Atlas de estudio basado en los PDF oficiales del curso: **Big Data 1 · Sistemas de Big Data** (79 páginas) y **Big Data 2 · Aplicaciones de Big Data** (47 páginas), más las prácticas realmente realizadas.

## Secciones

- [Árbol](yggdrasil.html): **141 conceptos** clasificados por asignatura y fuente.
- [Terminología](terminologia.html): filtro de Big Data 1 o Big Data 2.
- [Laboratorio](laboratorio.html): **34 comandos y procedimientos** de Docker, HDFS, Hive y ATM.
- [Bitácora](bitacora.html): evolución y evidencias del trabajo de clase.
- [Dudas](dudas.html): cuestiones personales no atribuidas al profesor.
- [Auditoría del temario](auditoria-temario.md): correspondencia de los dos PDF con sus páginas.
- [Práctica completa ATM](practicas/atm-hive-parquet-cron.md): código Bash, consultas SQL y CSV.

**Big Data 1:** 5 V, DIKW, arquitectura de datos, cloud/costes, SQL, OLTP/OLAP, ETL/ELT, batch/streaming, Parquet, CRISP-DM/SEMMA, BigQuery, gobernanza, legislación, KPIs, dashboards, Open Data, DuckDB y Linux.

**Big Data 2:** Docker, Hadoop, HDFS, YARN, MapReduce, Hive, NiFi, Airflow, HBase, Redis, Kafka, PySpark y API de Open Data Euskadi. Práctica de cajeros ATM con Bash y Cron.

## Reglas de clasificación

- **Fuente PDF:** el concepto aparece en el material y se cita la página. Eso no significa que el alumno haya ejecutado cada actividad.
- **Práctica verificada:** las pruebas registradas se documentan en el Laboratorio y la Bitácora. En ATM se comprobó 5 transacciones y suma 630,00; el script Bash funcionó y Cron quedó registrado, pero su primer disparo automático no se ha observado.
- **Ampliación:** cualquier contexto didáctico no escrito explícitamente en los PDF debe reconocerse como complemento.
- **Separación con IA:** se excluye la rama de derivaciones estadísticas de IA (varianza, desviación, TCL, Markov, regresión y simulaciones didácticas); se mantiene exclusivamente estadística descriptiva básica de negocio porque Big Data 1 la incluye en su introducción. Las dudas sobre PRNG se conservan en su propia sección.

## Uso

Abre `index.html` en el navegador, o visita https://raineragoge.github.io/Yggdrasil-bigdata/ cuando GitHub Pages esté activado. Las marcas de progreso se guardan localmente en el navegador, no en GitHub.
