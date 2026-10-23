# Revisión completa del temario · Yggdrasil V4

**Fecha de revisión:** 23 de octubre de 2026.

Se usaron como fuentes principales los dos PDF aportados: «Sistemas de Big Data» (**Big Data 1, 79 páginas**) y «Aplicaciones de Big Data» (**Big Data 2, 47 páginas**). Se cruzaron sus materias con los ejercicios registrados durante las clases. **Un tema que aparece en el PDF no se considera automáticamente una práctica realizada.**

## Big Data 1 · Sistemas de Big Data

| Apartado del PDF | Páginas |
| --- | --- |
| Fundamentos, 5 V, escalabilidad y pirámide DIKW | 1–11 |
| OLTP, OLAP, SQL vs NoSQL, Data Warehouse, Lake y Mart | 12–13 |
| Cloud y costes: CAPEX/OPEX, autoescalado, serverless | 14–16 |
| Metodologías SEMMA y CRISP-DM | 17–20 |
| Procesamiento batch/streaming, schema-on-write/read, Parquet | 21–27 |
| BigQuery, SQL, CLI, particionado y clustering | 28–36 |
| Gobernanza, Lambda/Kappa, CAP y legislación de datos | 37–46 |
| Diseño de pipelines, ETL/ELT, calidad, KPIs y dashboards | 47–66 |
| Open Data, DuckDB y multihilo | 67–73 |
| Linux para datos: archivos, pipes, awk, grep, sort, etc. | 74–78 |

## Big Data 2 · Aplicaciones de Big Data

| Apartado del PDF | Páginas |
| --- | --- |
| Docker y Hadoop | 1–6 |
| HDFS, bloques, replicación, administración, snapshots | 7–12 |
| Hive y MapReduce, WordCount y ejemplo de Pi | 12–19 |
| NiFi, procesadores e ingesta de CSV a JSON | 19–28 |
| Open Data Euskadi y APIs | 29–33 |
| Apache Airflow | 34 |
| Apache HBase | 35–40 |
| Redis y mensajería | 41–42 |
| Kafka, productores, consumidores y particiones | 43–45 |
| PySpark y referencia introductoria a Neo4j | 46 |

## Prácticas realizadas durante el curso

- **Linux/Docker/HDFS:** navegación, transferencia de archivos, comprobación de HDFS, CSV diarios organizados en carpetas por fecha.
- **Hive sobre ventas:** tabla y consultas agregadas; comprobación anterior de 49 filas.
- **BigQuery y Looker Studio:** consultas de ventas, visualizaciones e indicadores trabajados en clase.
- **ATM, Big Data 2:** 5 transacciones; suma de importes 630,00; CSV cargado en HDFS y Hive, convertido a Parquet y comprobado; Bash ejecutado correctamente. Crontab instalado y tarea diaria registrada a la 01:00. **No se ha verificado todavía una ejecución real programada de Cron.**
- Código y explicación reproducibles: [Práctica ATM](practicas/atm-hive-parquet-cron.md).

## Qué se apartó del árbol principal

- Conceptos matemáticos importados del material de IA: desarrollos de varianza y desviación estándar, esperanza, Ley de los Grandes Números, TCL, Markov, probabilidad y ejercicios de monedas/dados.
- PRNG, semillas y seguridad criptográfica: siguen en **Dudas personales**, sin presentarse como contenido oficial del profesor.
- Ejercicios de anomalías sintéticas y A/B testing sin vínculo suficiente con los dos PDF de esta práctica.

### Conceptos fronterizos

- **Estadística básica** sí figura en el objetivo de Big Data 1 (pág. 1); se conserva únicamente su aplicación descriptiva a KPIs, sumas, conteos y medias. No la rama matemática de IA.
- **Monte Carlo** se menciona en Big Data 2 (pág. 15) solamente como ejemplo distribuido para estimar π con MapReduce.
- **SEMMA / CRISP-DM** aparecen expresamente en Big Data 1 (págs. 17–20) aunque también se empleen en proyectos de IA.
- **IA generativa** aparece como contexto en Big Data 1 (pág. 37), sin importar por ello algoritmos de IA al árbol.

## Norma de mantenimiento

Clasificar cada nuevo concepto por asignatura, identificar PDF y página o práctica, preservar la distinción entre **documentado** y **ejecutado**, y mantener dudas personales fuera del programa oficial.
