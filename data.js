/* Fuente única de conceptos para Árbol y Terminología. Edita este archivo para ampliar el atlas. */
window.YGG_BIGDATA_ITEMS = [
  {
    "id": "bigdata",
    "parent": null,
    "title": "Big Data",
    "short": "Datos y sistemas que superan el tratamiento convencional de una sola máquina.",
    "definition": "Big Data combina métodos de almacenamiento, procesamiento distribuido y análisis para trabajar con conjuntos de datos cuyo volumen, velocidad o heterogeneidad complican su tratamiento convencional.",
    "example": "Un histórico de millones de transacciones puede almacenarse repartido entre nodos y analizarse en paralelo.",
    "caution": "No se define únicamente por un tamaño exacto: depende del problema y de la infraestructura.",
    "status": "visto",
    "source": "Introducción: ambos PDF, pág. 1 de ambos PDF",
    "related": []
  },
  {
    "id": "bigdata1",
    "parent": "bigdata",
    "title": "Big Data 1 · Sistemas de Big Data",
    "short": "Analizar, preparar e interpretar datos en una máquina.",
    "definition": "Temario de «Sistemas de Big Data»: fundamentos, arquitecturas, procesamiento, SQL, almacenes analíticos, BigQuery, gobernanza, visualización y Linux.",
    "example": "Prácticas de ventas con SQL/BigQuery y cuadros de mando.",
    "caution": "Esta rama distingue lo presente en el PDF de las prácticas concretamente verificadas.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 1–79 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "fundamentos",
    "parent": "bigdata1",
    "title": "Fundamentos",
    "short": "Conceptos básicos, rendimiento y costes.",
    "definition": "Antes de ejecutar herramientas conviene entender qué datos gestionamos, a qué ritmo llegan y qué recursos necesitamos.",
    "example": "Elegir entre analizar ventas acumuladas una vez al día o detectar anomalías al momento cambia toda la arquitectura.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 1–11",
    "related": []
  },
  {
    "id": "volumen",
    "parent": "fundamentos",
    "title": "Volumen",
    "short": "Cantidad de datos que debe procesarse.",
    "definition": "El volumen describe el tamaño de los datos que un sistema tiene que almacenar, mover o analizar.",
    "example": "5 TB pueden exceder la memoria y el disco de un ordenador personal y motivar una solución distribuida.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 2–5",
    "related": []
  },
  {
    "id": "velocidad",
    "parent": "fundamentos",
    "title": "Velocidad",
    "short": "Ritmo de llegada y procesamiento de los datos.",
    "definition": "La velocidad caracteriza cuán rápido se producen y deben tratarse los eventos.",
    "example": "Un flujo de clics de una web puede llegar continuamente, mientras un CSV se procesa al final del día.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 2–5",
    "related": []
  },
  {
    "id": "variedad",
    "parent": "fundamentos",
    "title": "Variedad",
    "short": "Diferentes estructuras, formatos y fuentes.",
    "definition": "Big Data combina tablas, registros, documentos, imágenes, logs y otros tipos de datos.",
    "example": "Un comercio reúne CSV de ventas, JSON de pedidos y registros del servidor.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 2–5",
    "related": []
  },
  {
    "id": "cinco-v",
    "parent": "fundamentos",
    "title": "Las 5 V",
    "short": "Marco conceptual frecuente: volumen, velocidad, variedad, veracidad y valor.",
    "definition": "Las 5 V son un esquema didáctico de propiedades que suelen importar al diseñar soluciones Big Data. No son una definición matemática ni un requisito obligatorio.",
    "example": "Tener millones de registros no sirve si contienen errores y no ayudan a tomar decisiones.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 2–5",
    "related": [
      "volumen",
      "velocidad",
      "variedad"
    ]
  },
  {
    "id": "veracidad",
    "parent": "cinco-v",
    "title": "Veracidad",
    "short": "Calidad y fiabilidad de los datos.",
    "definition": "Los datos pueden ser incorrectos, duplicados o estar incompletos.",
    "example": "Un sensor da una lectura físicamente imposible.",
    "caution": "Volumen no garantiza exactitud.",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pág. 3",
    "related": [
      "calidad"
    ],
    "status": "visto"
  },
  {
    "id": "valor-datos",
    "parent": "cinco-v",
    "title": "Valor de los datos",
    "short": "Utilidad para decisiones.",
    "definition": "El valor consiste en convertir los datos en información útil para actuar.",
    "example": "Optimizar rutas o planificar existencias a partir de ventas.",
    "caution": "Más datos no implican más valor.",
    "source": "Big Data 1, PDF «Sistemas de Big Data», págs. 3–4",
    "related": [
      "dikw"
    ],
    "status": "visto"
  },
  {
    "id": "latencia",
    "parent": "fundamentos",
    "title": "Latencia",
    "short": "Tiempo desde la solicitud o evento hasta la respuesta.",
    "definition": "La latencia mide cuánto tarda una operación. Debe distinguirse de la cantidad de trabajo completado en un intervalo.",
    "example": "Una consulta responde en 150 milisegundos: esa cifra expresa su latencia.",
    "caution": "Latencia no significa velocidad de procesamiento en unidades por minuto; eso se parece al throughput.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 22 y 51",
    "related": [
      "throughput"
    ]
  },
  {
    "id": "throughput",
    "parent": "fundamentos",
    "title": "Throughput",
    "short": "Cantidad de datos u operaciones procesadas por unidad de tiempo.",
    "definition": "El throughput o rendimiento efectivo mide el volumen de trabajo completado por segundo, minuto u otra unidad.",
    "example": "Un sistema ingiere 60 000 eventos por minuto.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 51",
    "related": [
      "latencia"
    ]
  },
  {
    "id": "capex",
    "parent": "fundamentos",
    "title": "CAPEX",
    "short": "Inversión de capital en activos de largo plazo.",
    "definition": "CAPEX engloba inversiones capitalizables, como la compra de servidores propios; su tratamiento contable depende de la operación.",
    "example": "Comprar hardware de un centro de datos es normalmente inversión CAPEX.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 14",
    "related": [
      "opex"
    ]
  },
  {
    "id": "opex",
    "parent": "fundamentos",
    "title": "OPEX",
    "short": "Gasto operativo recurrente.",
    "definition": "OPEX incluye gastos corrientes para mantener y operar servicios: suministros, determinadas suscripciones o infraestructura alquilada.",
    "example": "Pagar cada mes por servidores en la nube puede clasificarse como OPEX.",
    "caution": "No todo gasto digital es OPEX ni todo gasto físico es CAPEX; depende de su naturaleza contable.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 14",
    "related": [
      "capex"
    ]
  },
  {
    "id": "escalabilidad",
    "parent": "fundamentos",
    "title": "Escalabilidad",
    "short": "Capacidad de aumentar la carga admisible.",
    "definition": "La escalabilidad vertical aumenta recursos de una máquina; la horizontal añade máquinas o nodos.",
    "example": "Si 1 equipo no da abasto, se añaden nodos para repartir parte del procesamiento.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 7–9",
    "related": [
      "cluster"
    ]
  },
  {
    "id": "dikw",
    "parent": "fundamentos",
    "title": "Pirámide DIKW",
    "short": "Datos → Información → Conocimiento → Sabiduría.",
    "definition": "Modelo para pasar de datos brutos a información contextualizada, detectar patrones y tomar decisiones.",
    "example": "Analizar ventas por día para planificar personal o stock.",
    "caution": "Una métrica aislada no es automáticamente conocimiento ni una decisión.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 9–11 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "arquitectura",
    "parent": "bigdata1",
    "title": "Arquitectura del dato",
    "short": "Sistemas de análisis, almacenes y patrones.",
    "definition": "Según el uso, los datos pueden alimentar operaciones diarias, analítica histórica o almacenamiento flexible.",
    "example": "El sistema de cobro registra pedidos; un almacén analítico examina tendencias mensuales.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 12–13 y 49–53",
    "related": []
  },
  {
    "id": "oltp",
    "parent": "arquitectura",
    "title": "OLTP",
    "short": "Procesamiento de transacciones operativas.",
    "definition": "Online Transaction Processing gestiona lecturas y escrituras cortas, frecuentes y con consistencia operativa: compras, reservas o pagos.",
    "example": "Registrar una compra y actualizar el stock en una tienda.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 12–13",
    "related": [
      "olap"
    ]
  },
  {
    "id": "olap",
    "parent": "arquitectura",
    "title": "OLAP",
    "short": "Procesamiento analítico de información.",
    "definition": "Online Analytical Processing permite consultar históricos, agregaciones y relaciones para analizar el negocio.",
    "example": "Calcular ventas por región y por trimestre durante cinco años.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 12–13",
    "related": [
      "oltp",
      "data-warehouse"
    ]
  },
  {
    "id": "data-warehouse",
    "parent": "arquitectura",
    "title": "Data Warehouse",
    "short": "Repositorio preparado para analítica estructurada.",
    "definition": "Integra datos tratados y modelados para consultas de informes y BI.",
    "example": "Un almacén centralizado reúne ventas y clientes con métricas coherentes.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 12–13",
    "related": [
      "data-mart",
      "data-lake"
    ]
  },
  {
    "id": "data-mart",
    "parent": "arquitectura",
    "title": "Data Mart",
    "short": "Conjunto analítico orientado a un departamento o dominio.",
    "definition": "Es una porción específica de información, a menudo obtenida de un Data Warehouse, dirigida a un área de negocio.",
    "example": "Un Data Mart de marketing contiene conversiones, campañas y segmentos.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 13",
    "related": []
  },
  {
    "id": "data-lake",
    "parent": "arquitectura",
    "title": "Data Lake",
    "short": "Almacén flexible de datos en distintos formatos.",
    "definition": "Permite guardar información bruta o transformada de diferentes tipos para usos posteriores.",
    "example": "Un lago conserva CSV, logs, JSON y archivos de distintos departamentos.",
    "caution": "No es igual a Data Warehouse ni significa ausencia de gobierno del dato.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 13",
    "related": [
      "data-warehouse"
    ]
  },
  {
    "id": "lakehouse",
    "parent": "arquitectura",
    "title": "Lakehouse",
    "short": "Patrón que combina ideas de Data Lake y Warehouse.",
    "definition": "Añade gestión de tablas, transacciones y capacidades analíticas al almacenamiento flexible de un lago de datos.",
    "example": "Consultas SQL y procesamiento de datos sobre tablas almacenadas en objetos.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 53",
    "related": []
  },
  {
    "id": "lambda",
    "parent": "arquitectura",
    "title": "Arquitectura Lambda",
    "short": "Combina una ruta batch y otra de baja latencia.",
    "definition": "Patrón histórico que procesa los datos en dos caminos: batch para exhaustividad y speed layer para resultados rápidos.",
    "example": "Resultados en tiempo real se reconcilian con cálculos completos de cada noche.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 39–40",
    "related": [
      "kappa"
    ]
  },
  {
    "id": "kappa",
    "parent": "arquitectura",
    "title": "Arquitectura Kappa",
    "short": "Procesamiento centrado en un flujo de eventos.",
    "definition": "Busca simplificar arquitecturas procesando eventos mediante una capa de streaming y reprocesándolos cuando sea necesario.",
    "example": "Las mismas transformaciones calculan el indicador actual y reprocesan datos pasados.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 39–40",
    "related": [
      "lambda"
    ]
  },
  {
    "id": "gobierno-datos",
    "parent": "arquitectura",
    "title": "Gobierno y gestión del dato",
    "short": "Calidad, definiciones, responsabilidades y coherencia.",
    "definition": "El gobierno del dato establece políticas y prácticas para mantener información confiable, trazable y útil entre sistemas.",
    "example": "Unificar la definición de 'cliente activo' entre ventas y marketing.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 37–38 y 49–59",
    "related": [
      "lineaje",
      "mdm"
    ]
  },
  {
    "id": "mdm",
    "parent": "gobierno-datos",
    "title": "MDM (Master Data Management)",
    "short": "Gestión coherente de datos maestros.",
    "definition": "MDM coordina entidades básicas compartidas —clientes, productos o proveedores— para reducir duplicados e incoherencias entre aplicaciones.",
    "example": "Un mismo cliente tiene una identidad maestra coherente entre facturación y CRM.",
    "caution": "No es una marca concreta de software ni simplemente un Data Warehouse.",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 37–38, 49–59",
    "related": [
      "calidad",
      "gobierno-datos"
    ]
  },
  {
    "id": "rgpd",
    "parent": "gobierno-datos",
    "title": "RGPD",
    "short": "Protección de datos personales en la UE.",
    "definition": "El PDF aborda obligaciones y derechos en el tratamiento de datos personales.",
    "example": "Rectificación de un dato incorrecto y limitación de finalidad.",
    "caution": "El cumplimiento depende del uso concreto de datos.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 41–44 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "eu-data-act",
    "parent": "gobierno-datos",
    "title": "EU Data Act",
    "short": "Normativa europea sobre acceso y uso de ciertos datos.",
    "definition": "El temario examina los derechos de acceso y utilización de datos generados por productos conectados.",
    "example": "Datos de un producto IoT que pueden consultar usuarios y actores autorizados.",
    "caution": "No implica que todo dato de un dispositivo sea público.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 44–45 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "diccionario-datos",
    "parent": "gobierno-datos",
    "title": "Catálogo y diccionario de datos",
    "short": "Metadatos, definiciones y procedencia.",
    "definition": "La gobernanza incluye documentación, responsables, linaje, definiciones y descubrimiento de datasets.",
    "example": "Describir qué significa cada campo del archivo de ventas.",
    "caution": "El catálogo no sustituye la validación de datos.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 37–59 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "sql-nosql",
    "parent": "arquitectura",
    "title": "SQL y NoSQL",
    "short": "Modelos de persistencia relacionales y no relacionales.",
    "definition": "El PDF compara almacenamiento SQL tradicional y varias familias NoSQL para diferentes necesidades.",
    "example": "Datos estructurados en SQL y almacenamiento de documentos o clave-valor en NoSQL.",
    "caution": "NoSQL no significa que SQL no pueda utilizarse nunca.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 12–13 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "schema-on-write",
    "parent": "arquitectura",
    "title": "Schema-on-write",
    "short": "Validar la estructura al escribir los datos.",
    "definition": "El esquema se define y aplica antes de incorporar registros al sistema de almacenamiento.",
    "example": "Base de datos con columnas y tipos obligatorios al insertar.",
    "caution": "Puede rechazar entradas heterogéneas.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 23–25 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "schema-on-read",
    "parent": "arquitectura",
    "title": "Schema-on-read",
    "short": "Interpretar la estructura al consultar los datos.",
    "definition": "El esquema puede imponerse al leer, manteniendo los archivos originales en el almacenamiento.",
    "example": "Leer un CSV o JSON en un data lake según el esquema de análisis.",
    "caution": "No significa que no exista ningún esquema.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 23–25 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "medallion",
    "parent": "arquitectura",
    "title": "Arquitectura Medallion",
    "short": "Capas Bronze, Silver y Gold para organizar los datos.",
    "definition": "El PDF plantea una estructura de directorios de datos de distintos formatos y referencia una arquitectura Medallion.",
    "example": "Raw/Bronze → datos limpios/Silver → agregados/Gold.",
    "caution": "Las capas son una convención de arquitectura, no tres tecnologías.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 7 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "ingesta",
    "parent": "bigdata1",
    "title": "Ingesta y pipelines",
    "short": "Recorrido de los datos desde el origen hasta el consumo.",
    "definition": "Una arquitectura de datos encadena llegada de datos, validaciones, transformaciones, almacenamiento y publicación.",
    "example": "Los ficheros diarios de ventas pasan por una carpeta temporal, un script y un directorio HDFS.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 49–55",
    "related": []
  },
  {
    "id": "batch",
    "parent": "ingesta",
    "title": "Batch",
    "short": "Procesamiento por lotes en intervalos o ventanas.",
    "definition": "Se agrupan datos y se procesan periódicamente en vez de manejar cada evento en cuanto llega.",
    "example": "Cargar todos los CSV de ventas una vez por noche.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 21–22",
    "related": []
  },
  {
    "id": "streaming",
    "parent": "ingesta",
    "title": "Streaming",
    "short": "Procesamiento de eventos conforme van llegando.",
    "definition": "Consiste en tratar flujos continuos con resultados de latencia controlada.",
    "example": "Contabilizar clics de una web durante la sesión del usuario.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 21–22",
    "related": []
  },
  {
    "id": "etl",
    "parent": "ingesta",
    "title": "ETL",
    "short": "Extraer, transformar y cargar.",
    "definition": "Una canalización ETL transforma los datos antes de guardarlos en el sistema de destino.",
    "example": "Normalizar nombres de municipios antes de cargar tablas al almacén analítico.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 2, 13 y 47",
    "related": [
      "elt"
    ]
  },
  {
    "id": "elt",
    "parent": "ingesta",
    "title": "ELT",
    "short": "Extraer, cargar y transformar.",
    "definition": "En ELT se carga primero en un destino capaz de procesar las transformaciones posteriormente.",
    "example": "Guardar archivos en el lago y ejecutar después una limpieza SQL.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 2, 13 y 47",
    "related": [
      "etl"
    ]
  },
  {
    "id": "pipeline",
    "parent": "ingesta",
    "title": "Pipeline",
    "short": "Secuencia de pasos por la que circulan los datos.",
    "definition": "Un pipeline automatiza operaciones como obtener, validar, limpiar, transformar y publicar información.",
    "example": "Recoger los CSV, revisar su nombre, moverlos a HDFS y emitir un resultado.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 49–55",
    "related": []
  },
  {
    "id": "dag",
    "parent": "ingesta",
    "title": "DAG",
    "short": "Grafo dirigido acíclico de dependencias.",
    "definition": "Un DAG modela tareas conectadas por dependencias sin ciclos: una tarea puede necesitar que otra termine.",
    "example": "Descargar → validar → transformar → cargar; cargar no puede ejecutarse antes de validar.",
    "caution": "DAG representa las dependencias; no es sinónimo exacto de pipeline.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 55–56",
    "related": [
      "scheduler",
      "orquestador"
    ]
  },
  {
    "id": "scheduler",
    "parent": "ingesta",
    "title": "Scheduler",
    "short": "Planifica cuándo ejecutar tareas.",
    "definition": "Un scheduler decide en qué momento o con qué periodicidad lanzar procesos.",
    "example": "Iniciar un procesamiento diariamente a las 02:00.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 55–56",
    "related": [
      "orquestador"
    ]
  },
  {
    "id": "cron",
    "parent": "scheduler",
    "title": "Cron y Crontab",
    "short": "Programar tareas periódicas de Linux.",
    "definition": "Cron ejecuta comandos según 5 campos de tiempo; crontab gestiona la programación del usuario.",
    "example": "0 1 * * * /bin/bash /root/atm/subir_atm.sh >> /root/atm/cron.log 2>&1",
    "caution": "Tarea registrada, pero no se verificó todavía su primera ejecución real. Docker y servicios deben estar activos.",
    "status": "visto",
    "source": "Práctica real ATM de Big Data 2 (cron registrado, ejecución automática pendiente)",
    "related": [
      "scheduler",
      "bash-atm"
    ]
  },
  {
    "id": "orquestador",
    "parent": "ingesta",
    "title": "Orquestador",
    "short": "Coordina tareas, estados y dependencias.",
    "definition": "La orquestación controla el orden, los requisitos y, según la herramienta, reintentos y fallos de un pipeline.",
    "example": "Si falló la validación, no continúa con la carga; cuando se soluciona, puede reintentarse.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 55–56",
    "related": [
      "scheduler",
      "dag"
    ]
  },
  {
    "id": "lineaje",
    "parent": "ingesta",
    "title": "Linaje de datos",
    "short": "Trazabilidad de origen y transformaciones.",
    "definition": "El linaje indica de dónde proceden los datos y cómo han cambiado durante su procesamiento.",
    "example": "Un informe deriva de ventas.csv, de una limpieza y de una agregación mensual.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 37–38, 49–59",
    "related": []
  },
  {
    "id": "cdc",
    "parent": "ingesta",
    "title": "CDC (Change Data Capture)",
    "short": "Captura de cambios en datos de origen.",
    "definition": "CDC identifica inserciones, actualizaciones y eliminaciones en una fuente para trasladarlas a sistemas posteriores sin recargar todo el conjunto.",
    "example": "Cada pedido modificado en una base operativa produce un evento de cambio para el almacén analítico.",
    "caution": "CDC no implica necesariamente tiempo real absoluto ni garantiza por sí solo entrega exactamente una vez.",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 37–38, 49–59",
    "related": [
      "pipeline",
      "etl"
    ]
  },
  {
    "id": "analitica",
    "parent": "bigdata1",
    "title": "Análisis y decisiones",
    "short": "Del dato procesado a indicadores útiles.",
    "definition": "El objetivo práctico no es acumular archivos, sino extraer métricas, visualizar patrones y apoyar decisiones.",
    "example": "Comparar ingresos por mes y detectar diferencias en ventas.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 57–66",
    "related": []
  },
  {
    "id": "bi",
    "parent": "analitica",
    "title": "Business Intelligence",
    "short": "Análisis empresarial mediante informes, indicadores y consultas.",
    "definition": "BI convierte datos tratados en métricas y visualizaciones comprensibles para responsables de negocio.",
    "example": "Un cuadro de mando muestra ventas, devoluciones y evolución del stock.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 2 y 57–66",
    "related": []
  },
  {
    "id": "kpi",
    "parent": "analitica",
    "title": "KPI",
    "short": "Indicador clave ligado a un objetivo.",
    "definition": "Un KPI resume el avance respecto a una meta que debe estar claramente definida.",
    "example": "Porcentaje de entregas a tiempo por semana.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 59–63",
    "related": []
  },
  {
    "id": "calidad",
    "parent": "analitica",
    "title": "Calidad del dato",
    "short": "Validez, completitud, consistencia y adecuación de registros.",
    "definition": "Las reglas de calidad detectan datos erróneos o inconsistentes antes de utilizarlos en informes y modelos.",
    "example": "Una columna de fecha con formatos contradictorios necesita validación.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 37 y 49–52",
    "related": []
  },
  {
    "id": "dashboard",
    "parent": "analitica",
    "title": "Dashboard",
    "short": "Panel visual con métricas y tendencias.",
    "definition": "Un dashboard reúne representaciones de indicadores para hacer seguimiento y facilitar decisiones.",
    "example": "Gráficos de ventas por día y categoría con filtros por periodo.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 57–66",
    "related": []
  },
  {
    "id": "visualizacion",
    "parent": "analitica",
    "title": "Visualización de datos y cuadros de mando",
    "short": "Presentar información comprensible para decidir.",
    "definition": "La asignatura incluye dashboards, métricas y cuadros de mando para transformar datos en decisiones.",
    "example": "Dashboards de ventas con Looker Studio o Power BI.",
    "caution": "Un gráfico atractivo no garantiza que las métricas estén bien definidas.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 57–66 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "powerbi",
    "parent": "visualizacion",
    "title": "Microsoft Power BI",
    "short": "Dashboard e informes interactivos.",
    "definition": "El temario propone Power BI Desktop para visualizaciones y reportes analíticos.",
    "example": "Gráficos por tienda, evolución de ventas y filtros por región.",
    "caution": "Una actividad propuesta no implica que la herramienta se haya instalado o usado.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 64 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "looker-studio",
    "parent": "visualizacion",
    "title": "Looker Studio (Data Studio)",
    "short": "Visualización conectada a fuentes como BigQuery.",
    "definition": "En las prácticas registradas se realizaron gráficos de ventas en Data Studio / Looker Studio.",
    "example": "Panel con evolución de ventas, categorías, municipios y KPIs.",
    "caution": "Práctica realizada durante el curso; no atribuirla literalmente al PDF.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 57–66 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "balanced-scorecard",
    "parent": "visualizacion",
    "title": "Balanced Scorecard",
    "short": "Cuadro de mando integral por perspectivas.",
    "definition": "El PDF presenta una actividad de BSC para relacionar indicadores con objetivos de una organización.",
    "example": "Relacionar ingresos, satisfacción, procesos internos y aprendizaje.",
    "caution": "Los KPIs dependen de los objetivos reales.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 62–63 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "estadistica-descriptiva-bd1",
    "parent": "analitica",
    "title": "Estadística descriptiva para el negocio",
    "short": "Conteos, sumas y medias de datos.",
    "definition": "El objetivo del PDF de Big Data 1 menciona estadística básica y tendencias; se aplica a analizar datasets y KPIs.",
    "example": "Calcular media diaria de ventas.",
    "caution": "No importar las derivaciones matemáticas de varianza, TCL o Markov del curso de IA.",
    "source": "Big Data 1, PDF «Sistemas de Big Data», págs. 1 y 9–10",
    "related": [
      "kpi"
    ],
    "status": "visto"
  },
  {
    "id": "sistemas-distribuidos",
    "parent": "bigdata1",
    "title": "Sistemas distribuidos y consistencia",
    "short": "Disponibilidad, fallos de red y lectura coherente de datos.",
    "definition": "Varios nodos cooperan y se comunican por red; deben abordar cortes de comunicación, latencia, fallos y sincronización de información.",
    "example": "Un servicio reparte datos entre servidores en lugares distintos.",
    "caution": "HDFS y los sistemas distribuidos no tienen todos las mismas garantías de consistencia.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 39–40",
    "related": [
      "cluster",
      "teorema-cap"
    ]
  },
  {
    "id": "consistencia-distribuida",
    "parent": "sistemas-distribuidos",
    "title": "Consistencia de datos",
    "short": "Garantías sobre lo que ven los clientes al leer y escribir datos.",
    "definition": "La consistencia describe qué valores pueden observar las operaciones concurrentes en un sistema repartido.",
    "example": "Dos usuarios leen una ficha actualizada desde servidores distintos.",
    "caution": "No confundir consistencia del teorema CAP con la 'C' de ACID.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 39–40 (CAP)",
    "related": [
      "consistencia-fuerte",
      "consistencia-eventual",
      "teorema-cap"
    ]
  },
  {
    "id": "consistencia-fuerte",
    "parent": "consistencia-distribuida",
    "title": "Consistencia fuerte",
    "short": "Lecturas que respetan un orden coherente de escrituras.",
    "definition": "Un ejemplo exigente es la linealizabilidad: las operaciones parecen ocurrir instantáneamente en algún punto entre su inicio y fin, respetando el orden real.",
    "example": "Tras confirmarse una actualización de saldo, una nueva lectura ve la versión actualizada.",
    "caution": "'Fuerte' es un término general: especifica la garantía concreta cuando compares sistemas.",
    "status": "ampliacion",
    "source": "Complemento de CAP y sistemas distribuidos; el PDF Big Data 1 no desarrolla estas definiciones en detalle",
    "related": [
      "teorema-cap",
      "consistencia-eventual"
    ]
  },
  {
    "id": "consistencia-eventual",
    "parent": "consistencia-distribuida",
    "title": "Consistencia eventual",
    "short": "Las réplicas convergen si cesan las actualizaciones y la comunicación progresa.",
    "definition": "Tras una escritura, algunas réplicas pueden ofrecer temporalmente datos antiguos; bajo las condiciones del modelo acaban convergiendo.",
    "example": "Un cambio de perfil tarda unos instantes en propagarse a todas las réplicas.",
    "caution": "No garantiza que cada lectura inmediatamente posterior a escribir vea el dato nuevo.",
    "status": "ampliacion",
    "source": "Complemento de CAP y sistemas distribuidos; el PDF Big Data 1 no desarrolla estas definiciones en detalle",
    "related": [
      "consistencia-fuerte",
      "teorema-cap"
    ]
  },
  {
    "id": "teorema-cap",
    "parent": "sistemas-distribuidos",
    "title": "Teorema CAP",
    "short": "Compromiso entre consistencia y disponibilidad durante una partición de red.",
    "definition": "Si hay una partición de red, un sistema distribuido no puede garantizar simultáneamente consistencia linealizable (C) y disponibilidad para todas las peticiones (A). La P refleja la existencia de esa partición.",
    "example": "Ante un corte entre réplicas, el sistema puede rechazar ciertas operaciones para conservar C o responder usando datos potencialmente desactualizados para priorizar A.",
    "caution": "No es la regla literal de 'escoge dos de tres' en funcionamiento normal: el compromiso se manifiesta cuando hay particiones.",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 39–40 (preguntas y referencia conceptual)",
    "related": [
      "consistencia-distribuida",
      "consistencia-eventual"
    ]
  },
  {
    "id": "almacenamiento-compresion",
    "parent": "bigdata1",
    "title": "Almacenamiento y compresión",
    "short": "Representaciones que reducen tamaño y costes de almacenamiento.",
    "definition": "Las técnicas de compresión aprovechan redundancias en secuencias y archivos; su eficacia depende de cómo sean los datos.",
    "example": "Una secuencia con letras repetidas puede ocupar menos con una codificación de rachas.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 25–29",
    "related": []
  },
  {
    "id": "rle",
    "parent": "almacenamiento-compresion",
    "title": "Compresión RLE (Run-Length Encoding)",
    "short": "Sustituye rachas repetidas por símbolo y longitud.",
    "definition": "RLE codifica series consecutivas del mismo símbolo como una pareja de valor y número de repeticiones.",
    "example": "AAAAABBBCC → (A,5)(B,3)(C,2).",
    "caution": "Con símbolos poco repetidos puede ocupar lo mismo o más; el formato debe permitir decodificación inequívoca.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», pág. 29",
    "related": []
  },
  {
    "id": "parquet",
    "parent": "almacenamiento-compresion",
    "title": "Apache Parquet",
    "short": "Formato columnar para análisis.",
    "definition": "Parquet almacena datos por columnas y facilita lecturas analíticas; Hive admite STORED AS PARQUET.",
    "example": "Se creó transacciones_atm_parquet, particionada por fecha.",
    "caution": "Es formato de archivos, no base de datos independiente.",
    "status": "visto",
    "source": "Big Data 1, PDF «Sistemas de Big Data», pp. 25–27; aplicado también en práctica ATM",
    "related": [
      "hive",
      "hive-overwrite"
    ]
  },
  {
    "id": "parquet-row-groups",
    "parent": "parquet",
    "title": "Row groups Parquet",
    "short": "Estadísticas por grupos de filas.",
    "definition": "Los metadatos de cada row group pueden evitar leer bloques que no coinciden con un filtro.",
    "example": "Filtrar por edad con las estadísticas de los grupos.",
    "caution": "Depende de la organización y del motor de lectura.",
    "source": "Big Data 1, PDF «Sistemas de Big Data», págs. 25–27",
    "related": [
      "parquet"
    ],
    "status": "visto"
  },
  {
    "id": "linux-basico",
    "parent": "bigdata1",
    "title": "Linux para gestionar datos",
    "short": "Comandos, ficheros, permisos y utilidades de consola.",
    "definition": "La parte final del PDF de Big Data 1 incluye navegación, ficheros, procesos, permisos, pipes y comandos para manipular CSV.",
    "example": "pwd, ls, cd, cat, head, tail, grep, cut, sort, awk y wc.",
    "caution": "No confundir rutas del host, del contenedor y de HDFS.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 74–78 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "shell",
    "parent": "linux-basico",
    "title": "Shell de Linux",
    "short": "Intérprete de comandos del contenedor.",
    "definition": "La shell permite interactuar con procesos, archivos y herramientas Linux; bash es una shell habitual.",
    "example": "root@contenedor:~# indica que estás dentro del contenedor.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "pwd",
    "parent": "linux-basico",
    "title": "pwd",
    "short": "Muestra la ruta de trabajo actual.",
    "definition": "pwd imprime el directorio de trabajo en el que estás situado.",
    "example": "pwd → /root.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "ls",
    "parent": "linux-basico",
    "title": "ls",
    "short": "Lista archivos o carpetas del directorio.",
    "definition": "ls examina entradas de un directorio en el sistema de archivos local del contenedor.",
    "example": "ls /tmp lista archivos locales, no de HDFS.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "cd",
    "parent": "linux-basico",
    "title": "cd",
    "short": "Cambia de directorio.",
    "definition": "cd permite navegar entre directorios del sistema de archivos local.",
    "example": "cd .. sube al directorio padre.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "cloud",
    "parent": "bigdata1",
    "title": "Cloud y costes",
    "short": "Recursos de cómputo y almacenamiento ofrecidos como servicios.",
    "definition": "El PDF compara on-premises y nube, escalado automático, costes de cómputo, almacenamiento y egreso.",
    "example": "Comparar comprar servidores con pago por uso de la nube.",
    "caution": "Coste variable no significa coste nulo ni ilimitado.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 14–16 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "iaas-paas-saas",
    "parent": "cloud",
    "title": "IaaS, PaaS y SaaS",
    "short": "Niveles de servicio gestionado en la nube.",
    "definition": "En las referencias de cloud se distinguen infraestructura, plataforma y software suministrados como servicio.",
    "example": "EC2 como infraestructura; servicio de desarrollo gestionado como plataforma.",
    "caution": "Cambia quién gestiona servidores, plataforma y aplicación.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 14–16 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "serverless",
    "parent": "cloud",
    "title": "Serverless y autoscaling",
    "short": "Servicios que abstraen aprovisionamiento y ajustan capacidad.",
    "definition": "El temario explica el pago por uso y el autoescalado en proveedores cloud.",
    "example": "BigQuery permite ejecutar consultas sin gestionar un servidor propio.",
    "caution": "Serverless sigue usando infraestructura física.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 8–15 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "bigquery",
    "parent": "bigdata1",
    "title": "Google BigQuery",
    "short": "Consultas analíticas SQL en un servicio de nube.",
    "definition": "El PDF enseña el sandbox, consultas sobre datasets públicos, carga desde CLI y separación de almacenamiento y cómputo.",
    "example": "Analizar nombres de bebés de EE. UU. o ventas de un conjunto de datos.",
    "caution": "La facturación y cuotas dependen del uso y del proyecto.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 28–36 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "bigquery-particiones",
    "parent": "bigquery",
    "title": "Particionado en BigQuery",
    "short": "Restringir el volumen consultado mediante particiones.",
    "definition": "La tabla de práctica puede particionarse por order_date para filtrar los datos.",
    "example": "PARTITION BY order_date; WHERE order_date='2025-04-22'.",
    "caution": "El particionado ayuda cuando las consultas usan la clave de partición.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 35–36 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "bigquery-clustering",
    "parent": "bigquery",
    "title": "Clustering en BigQuery",
    "short": "Organizar físicamente los datos por columnas de consulta.",
    "definition": "El PDF utiliza CLUSTER BY city sobre una tabla de ventas para optimizar filtros.",
    "example": "CLUSTER BY city; WHERE city='Pamplona'.",
    "caution": "No confundir el clustering físico de tablas con técnicas de ML no supervisadas.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 35–36 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "bigquery-cli",
    "parent": "bigquery",
    "title": "CLI bq",
    "short": "Gestionar datasets, cargar tablas y consultar metadatos.",
    "definition": "El material muestra bq load, bq show y exportación de resultados con herramientas de consola.",
    "example": "bq show customers.sales_partitioned.",
    "caution": "Los nombres de proyecto y dataset dependen del entorno.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 34–36 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "duckdb",
    "parent": "bigdata1",
    "title": "DuckDB",
    "short": "Motor de SQL analítico integrado, de una sola máquina.",
    "definition": "El PDF introduce DuckDB para consultar CSV y DataFrames con SQL, sin clúster externo.",
    "example": "En Colab, consultar un DataFrame de pandas con DuckDB.",
    "caution": "No confundir procesamiento multihilo local con clúster distribuido.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 68–73 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "paralelismo-duckdb",
    "parent": "duckdb",
    "title": "Multihilo en DuckDB",
    "short": "Paralelismo dentro de una máquina.",
    "definition": "El PDF presenta el uso de threads para aprovechar los núcleos locales y lo compara con la computación distribuida.",
    "example": "Una consulta DuckDB puede usar varios hilos sin añadir servidores.",
    "caution": "Varios hilos no equivalen a varios nodos.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 72–73 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "pandas-numpy",
    "parent": "bigdata1",
    "title": "Python: pandas y NumPy para análisis",
    "short": "Herramientas locales de transformación y análisis.",
    "definition": "En los objetivos de Big Data 1 figuran pandas, NumPy, SQL y el trabajo con datasets en una sola máquina.",
    "example": "Limpiar columnas, contar registros y estudiar tendencias en CSV.",
    "caution": "Las técnicas de clasificación y entrenamiento de IA pertenecen a otra asignatura.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 1–5 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "csv-json",
    "parent": "bigdata1",
    "title": "CSV y JSON",
    "short": "Formatos de intercambio tabular y semiestructurado.",
    "definition": "Los ejercicios de ingesta y limpieza utilizan CSV, JSON y archivos de distintas estructuras.",
    "example": "CSV de ventas y JSON de sensores o eventos.",
    "caution": "No confundir el formato con el esquema ni con la fuente del dato.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 7–25 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "metodologias",
    "parent": "bigdata1",
    "title": "Metodologías de proyectos de datos",
    "short": "Trabajo por fases para responder problemas de negocio.",
    "definition": "El PDF dedica un bloque a SEMMA, CRISP-DM y la importancia de demostrar valor incremental.",
    "example": "Empezar por la comprensión del negocio y evaluar resultados.",
    "caution": "Aunque se usen en IA, aquí aparecen expresamente en Big Data 1.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 17–20 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "semma",
    "parent": "metodologias",
    "title": "SEMMA",
    "short": "Sample, Explore, Modify, Model, Assess.",
    "definition": "Metodología de SAS expuesta en el temario para estructurar proyectos de análisis de datos.",
    "example": "Muestrear y explorar ventas antes de evaluar resultados.",
    "caution": "No asumir que su mención implica entrenamientos realizados.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 17–18 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "crisp-dm",
    "parent": "metodologias",
    "title": "CRISP-DM",
    "short": "Ciclo de minería de datos desde el negocio al despliegue.",
    "definition": "El material pide investigar CRISP-DM y compararlo con SEMMA para planificar proyectos.",
    "example": "Definir objetivo de ventas, preparar datos, evaluar y entregar conclusiones.",
    "caution": "Está también en IA, pero su presencia en el PDF de Big Data 1 justifica aquí un resumen contextual.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 17–20 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "datos-abiertos",
    "parent": "bigdata1",
    "title": "Open Data",
    "short": "Datos abiertos para reutilización y análisis.",
    "definition": "El temario introduce fuentes públicas y ejemplos de portales y datasets para análisis.",
    "example": "Consultar datasets abiertos de organismos públicos.",
    "caution": "No todos los datos accesibles en internet poseen licencia abierta.",
    "status": "visto",
    "source": "Big Data 1 · PDF «Sistemas de Big Data», págs. 67–68 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "bigdata2",
    "parent": "bigdata",
    "title": "Big Data 2 · Aplicaciones de Big Data",
    "short": "Construir y operar sistemas y flujos distribuidos.",
    "definition": "Temario de «Aplicaciones de Big Data»: Docker, Hadoop, HDFS, YARN, MapReduce, Hive, NiFi, Airflow, HBase, Redis, Kafka y PySpark.",
    "example": "Práctica ATM de CSV a HDFS, Hive y Parquet con Bash y Cron.",
    "caution": "Aparecer en el PDF no significa que hayamos ejecutado todas sus prácticas.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 1–47 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "hadoop",
    "parent": "bigdata2",
    "title": "Ecosistema Hadoop",
    "short": "Distribución, almacenamiento y ejecución.",
    "definition": "Hadoop permite trabajar con grandes conjuntos de datos utilizando distintos componentes y nodos.",
    "example": "El contenedor de clase inicia HDFS y ejecuta trabajos MapReduce.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "cluster",
    "parent": "hadoop",
    "title": "Clúster y nodos",
    "short": "Conjunto de máquinas que cooperan.",
    "definition": "Un clúster agrupa nodos que se reparten almacenamiento, ejecución o coordinación.",
    "example": "Tres nodos almacenan bloques de un fichero y pueden procesar tareas en paralelo.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 3–4",
    "related": [
      "escalabilidad"
    ]
  },
  {
    "id": "hdfs",
    "parent": "hadoop",
    "title": "HDFS",
    "short": "Sistema de archivos distribuido de Hadoop.",
    "definition": "Hadoop Distributed File System fragmenta archivos en bloques que se reparten entre DataNodes. El NameNode mantiene metadatos y ubicaciones lógicas.",
    "example": "El fichero /ventas/2026/10/01/ventas_2026-10-01_09.csv se guarda en HDFS, no como simple archivo del anfitrión.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": [
      "namenode",
      "datanode"
    ]
  },
  {
    "id": "hdfs-snapshots",
    "parent": "hdfs",
    "title": "Snapshots de HDFS",
    "short": "Copias puntuales del estado de directorios.",
    "definition": "El PDF documenta habilitación y gestión de snapshots y recuperación de ficheros.",
    "example": "hdfs dfs -createSnapshot files snap1.",
    "caution": "Deben estar habilitados para la carpeta.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», pág. 11 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "hdfs-balancer",
    "parent": "hdfs",
    "title": "Balancer de HDFS",
    "short": "Redistribución de bloques entre nodos.",
    "definition": "El material indica el comando hdfs balancer y explica su utilidad al añadir nodos.",
    "example": "Ejecutar balancer tras ampliar un clúster.",
    "caution": "En la práctica local no se simuló un clúster ampliado.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», pág. 11 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "namenode",
    "parent": "hadoop",
    "title": "NameNode",
    "short": "Servicio de metadatos de HDFS.",
    "definition": "Gestiona el espacio de nombres del sistema distribuido y el mapa de ubicación de bloques en DataNodes.",
    "example": "Una petición para localizar un archivo consulta metadatos que mantiene el NameNode.",
    "caution": "En arquitecturas con alta disponibilidad pueden existir NameNodes activos y en espera; el secundario clásico no es copia en caliente.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "datanode",
    "parent": "hadoop",
    "title": "DataNode",
    "short": "Servicio que conserva bloques de datos.",
    "definition": "Los DataNodes almacenan bloques y atienden las operaciones de lectura o escritura del contenido.",
    "example": "Al pedir un CSV, HDFS lee sus bloques desde uno o varios DataNodes.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "secondary-namenode",
    "parent": "hadoop",
    "title": "SecondaryNameNode",
    "short": "Ayuda a consolidar metadatos mediante checkpoints.",
    "definition": "Realiza tareas de checkpoint sobre la imagen del sistema de archivos y los registros de ediciones de HDFS.",
    "example": "Al ejecutar jps puede aparecer SecondaryNameNode junto a NameNode y DataNode.",
    "caution": "No es una réplica de respaldo que sustituya automáticamente al NameNode cuando falla.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "bloque-hdfs",
    "parent": "hadoop",
    "title": "Bloque HDFS",
    "short": "Unidad lógica de fragmentación.",
    "definition": "Los archivos grandes se reparten en bloques configurables; un tamaño común en configuraciones es 128 MiB.",
    "example": "En clase observasteis 134217728 bytes = 128 MiB para un bloque.",
    "caution": "No todos los clústeres tienen necesariamente este tamaño: depende de la configuración.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "replicacion",
    "parent": "hadoop",
    "title": "Replicación HDFS",
    "short": "Copias de bloques para tolerancia a fallos.",
    "definition": "HDFS puede almacenar varias réplicas del mismo bloque en distintos DataNodes para reducir riesgo de pérdida de datos.",
    "example": "Con factor 2, cada bloque tendrá dos réplicas mientras el clúster pueda satisfacer esa política.",
    "caution": "La replicación no equivale a una copia de seguridad independiente ni garantiza inmunidad ante borrados.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "yarn",
    "parent": "hadoop",
    "title": "YARN",
    "short": "Gestión de recursos y ejecución en Hadoop.",
    "definition": "Yet Another Resource Negotiator coordina recursos y aplicaciones en un clúster Hadoop.",
    "example": "start-yarn.sh arranca componentes de YARN en una instalación configurada.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "mapreduce",
    "parent": "hadoop",
    "title": "MapReduce",
    "short": "Modelo de procesamiento distribuido por etapas.",
    "definition": "La fase Map produce pares clave-valor; el sistema agrupa por clave (shuffle/sort) y Reduce agrega resultados.",
    "example": "Contar palabras: Map emite (palabra,1), shuffle agrupa la misma palabra, Reduce suma.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 13–19",
    "related": [
      "map",
      "shuffle",
      "reduce"
    ]
  },
  {
    "id": "map",
    "parent": "mapreduce",
    "title": "Map",
    "short": "Transformación inicial en pares clave-valor.",
    "definition": "Cada mapper procesa entradas y produce registros intermedios asociados a claves.",
    "example": "Leer «rojo azul rojo» y emitir (rojo,1), (azul,1), (rojo,1).",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 13–14",
    "related": []
  },
  {
    "id": "shuffle",
    "parent": "mapreduce",
    "title": "Shuffle y sort",
    "short": "Redistribución y agrupación por clave.",
    "definition": "El framework mueve y ordena datos intermedios para reunir valores correspondientes a la misma clave.",
    "example": "Los dos registros de «rojo» terminan juntos antes de sumar.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 13–14",
    "related": []
  },
  {
    "id": "reduce",
    "parent": "mapreduce",
    "title": "Reduce",
    "short": "Agregación de registros de una clave.",
    "definition": "Un reducer recibe una clave y sus valores asociados para combinarlos y producir una salida.",
    "example": "(rojo,[1,1]) pasa a (rojo,2).",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 13–14",
    "related": []
  },
  {
    "id": "mapreduce-wordcount",
    "parent": "mapreduce",
    "title": "WordCount distribuido",
    "short": "Ejemplo MapReduce de contar palabras.",
    "definition": "El profesor muestra un programa de ejemplo de Hadoop que toma archivo HDFS y escribe resultados en otra carpeta HDFS.",
    "example": "hadoop jar ... wordcount /data.txt /resultados/output.",
    "caution": "La ruta de salida no debe existir previamente en el mismo job.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», pág. 14 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "mapreduce-pi",
    "parent": "mapreduce",
    "title": "Estimación de π con MapReduce",
    "short": "Ejemplo distribuido de simulación Monte Carlo.",
    "definition": "El PDF contiene el ejemplo Pi Estimation como actividad de MapReduce: usar varias tareas Map y muestras.",
    "example": "hadoop jar ... pi 2 1000.",
    "caution": "La simulación sirve para explicar MapReduce; no reintroduce el temario de probabilidad de IA.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», pág. 15 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "tolerancia-fallos",
    "parent": "hadoop",
    "title": "Tolerancia a fallos",
    "short": "Capacidad para continuar o recuperarse ante fallos de componentes.",
    "definition": "Los sistemas distribuidos pueden usar replicación, reejecución de tareas y mecanismos de recuperación para tolerar averías.",
    "example": "Si un DataNode falla, HDFS puede usar otra réplica disponible.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 3–4",
    "related": []
  },
  {
    "id": "hive",
    "parent": "hadoop",
    "title": "Apache Hive",
    "short": "Motor SQL de tablas sobre archivos de Hadoop.",
    "definition": "Permite definir tablas y ejecutar consultas tipo SQL (HiveQL) sobre datos de HDFS, mediante un motor de ejecución como MapReduce.",
    "example": "Se consultó transacciones_atm_raw con Beeline y HiveServer2.",
    "caution": "Hive-on-MR mostró aviso de obsolescencia, pero el ejercicio funcionó.",
    "status": "visto",
    "source": "Big Data 2, PDF «Aplicaciones de Big Data», pp. 12–13 y práctica ATM de clase",
    "related": [
      "hdfs",
      "mapreduce"
    ]
  },
  {
    "id": "beeline",
    "parent": "hive",
    "title": "Beeline y HiveServer2",
    "short": "Interfaz JDBC de Hive.",
    "definition": "Beeline permite consultas interactivas o ejecuciones desde Bash mediante la opción -e; requiere HiveServer2 accesible.",
    "example": "beeline -u 'jdbc:hive2://localhost:10000/clase_bigdata' -n root -e 'SHOW PARTITIONS transacciones_atm_raw;'",
    "caution": "Dentro de Beeline las instrucciones son HiveQL; fuera, Bash.",
    "status": "visto",
    "source": "Práctica real ATM de Big Data 2, octubre de 2026",
    "related": [
      "hive",
      "bash-atm"
    ]
  },
  {
    "id": "hive-externa",
    "parent": "hive",
    "title": "Tabla externa Hive",
    "short": "SQL sobre CSV situado en HDFS.",
    "definition": "CREATE EXTERNAL TABLE especifica columnas, separador, partición y LOCATION para acceder a ficheros existentes.",
    "example": "La tabla transacciones_atm_raw lee /banco/atm/raw y omite la cabecera CSV.",
    "caution": "La carpeta HDFS y el catálogo de metadatos no son lo mismo.",
    "status": "visto",
    "source": "Práctica real ATM de Big Data 2, octubre de 2026",
    "related": [
      "hive-particiones",
      "hdfs"
    ]
  },
  {
    "id": "hive-particiones",
    "parent": "hive",
    "title": "Particiones Hive",
    "short": "Separar registros por fecha.",
    "definition": "PARTITIONED BY (fecha STRING) permite identificar y consultar carpetas organizadas con el patrón fecha=AAAA-MM-DD.",
    "example": "fecha=2026-10-19, confirmada con SHOW PARTITIONS.",
    "caution": "Crear carpetas en HDFS no registra siempre las particiones automáticamente.",
    "status": "visto",
    "source": "Práctica real ATM de Big Data 2, octubre de 2026",
    "related": [
      "hive-msck"
    ]
  },
  {
    "id": "hive-msck",
    "parent": "hive-particiones",
    "title": "MSCK REPAIR TABLE",
    "short": "Registrar particiones detectadas en HDFS.",
    "definition": "Actualiza el metastore con particiones que ya existen en directorios de una tabla Hive externa.",
    "example": "MSCK REPAIR TABLE transacciones_atm_raw;",
    "caution": "No convierte CSV a Parquet: solo registra metadatos.",
    "status": "visto",
    "source": "Práctica real ATM de Big Data 2, octubre de 2026",
    "related": [
      "hive-externa"
    ]
  },
  {
    "id": "hive-overwrite",
    "parent": "hive",
    "title": "INSERT OVERWRITE a Parquet",
    "short": "Recalcular una partición destino.",
    "definition": "INSERT OVERWRITE TABLE ... PARTITION (fecha='...') SELECT ... carga el resultado SQL sustituyendo datos de esa partición.",
    "example": "Se recargó 2026-10-19: COUNT(*)=5 y SUM(importe)=630.00.",
    "caution": "No es un INSERT acumulativo: sustituye el contenido de la partición.",
    "status": "visto",
    "source": "Práctica real ATM de Big Data 2, octubre de 2026",
    "related": [
      "parquet",
      "hive-particiones"
    ]
  },
  {
    "id": "hive-agregaciones",
    "parent": "hive",
    "title": "Agregaciones COUNT y SUM",
    "short": "Verificación de registros e importes.",
    "definition": "COUNT(*) cuenta filas y SUM(importe) suma importes en HiveQL; WHERE fecha filtra la partición.",
    "example": "5 transacciones; suma 630,00 en Parquet.",
    "caution": "Los importes de ingresos y retiradas figuran positivos: 630 no representa saldo neto.",
    "status": "visto",
    "source": "Práctica real ATM de Big Data 2, octubre de 2026",
    "related": [
      "hive-overwrite"
    ]
  },
  {
    "id": "docker",
    "parent": "bigdata2",
    "title": "Docker y entorno",
    "short": "Máquina anfitriona, contenedor, Linux y comandos.",
    "definition": "Los ejercicios distinguen el PowerShell del Windows anfitrión y la shell Linux dentro del contenedor Hadoop.",
    "example": "Ejecutar docker ps en PowerShell, docker exec -it hadoop bash y luego jps dentro.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2, PDF «Aplicaciones de Big Data», pp. 1–6; prácticas Docker",
    "related": []
  },
  {
    "id": "imagen",
    "parent": "docker",
    "title": "Imagen Docker",
    "short": "Plantilla inmutable a partir de la que se crean contenedores.",
    "definition": "Una imagen contiene capas con sistema de archivos, aplicaciones y configuración de base.",
    "example": "nassimbahri/hadoop es la imagen utilizada en la práctica.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2, PDF «Aplicaciones de Big Data», pp. 1–6; prácticas Docker",
    "related": [
      "contenedor"
    ]
  },
  {
    "id": "contenedor",
    "parent": "docker",
    "title": "Contenedor Docker",
    "short": "Instancia en ejecución o detenida de una imagen.",
    "definition": "Un contenedor es un entorno aislado basado en una imagen, con su propio estado de ejecución.",
    "example": "Puedes crear varios contenedores a partir de la misma imagen Hadoop.",
    "caution": "",
    "status": "visto",
    "source": "Big Data 2, PDF «Aplicaciones de Big Data», pp. 1–6; prácticas Docker",
    "related": [
      "imagen"
    ]
  },
  {
    "id": "host",
    "parent": "docker",
    "title": "Host y contenedor",
    "short": "Dos entornos con rutas y comandos diferentes.",
    "definition": "El host es Windows y utiliza PowerShell para controlar Docker; el contenedor ejecuta Linux y comandos Hadoop.",
    "example": "docker stop hadoop va en PowerShell; hdfs dfs -ls / se ejecuta dentro del contenedor.",
    "caution": "No confundas C:\\Users\\... del host con /tmp/... dentro del contenedor.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "ssh",
    "parent": "docker",
    "title": "Servicio SSH",
    "short": "Permite conexiones seguras entre procesos o máquinas.",
    "definition": "En la instalación de clase se arranca el servicio SSH antes de iniciar los demonios de Hadoop.",
    "example": "service ssh start se ejecuta dentro del contenedor.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "jps",
    "parent": "docker",
    "title": "jps",
    "short": "Muestra procesos de Java visibles para el usuario.",
    "definition": "Java Process Status Tool ayuda a comprobar si arrancaron los demonios de Hadoop.",
    "example": "Puede mostrar NameNode, DataNode, SecondaryNameNode, ResourceManager y NodeManager dependiendo de los servicios activos.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-cli",
    "parent": "bigdata2",
    "title": "Comandos HDFS",
    "short": "Operaciones prácticas sobre el sistema distribuido.",
    "definition": "Los comandos hdfs dfs actúan sobre rutas HDFS, no sobre los archivos locales del contenedor.",
    "example": "hdfs dfs -ls / enumera el directorio raíz del sistema distribuido.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-ls",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -ls",
    "short": "Lista archivos y directorios de HDFS.",
    "definition": "Muestra los elementos de una ruta HDFS y sus metadatos básicos.",
    "example": "hdfs dfs -ls /ventas/2026/10.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-mkdir",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -mkdir -p",
    "short": "Crea directorios, incluidos padres intermedios.",
    "definition": "La opción -p crea rutas anidadas sin exigir que sus carpetas superiores existan previamente.",
    "example": "hdfs dfs -mkdir -p /ventas/2026/10/04.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-put",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -put",
    "short": "Sube archivos desde local hacia HDFS.",
    "definition": "Copia archivos locales del contenedor a una ruta del sistema de archivos distribuido.",
    "example": "hdfs dfs -put /tmp/ventas_entrada/ventas_2026-10-04_09.csv /ventas/2026/10/04/.",
    "caution": "En estas prácticas «local» es el contenedor, no automáticamente el Windows anfitrión.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": [
      "hdfs-get"
    ]
  },
  {
    "id": "hdfs-get",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -get",
    "short": "Descarga archivos desde HDFS al sistema local.",
    "definition": "Copia un archivo de HDFS a una ruta del contenedor.",
    "example": "hdfs dfs -get /ventas/2026/10/04/ventas_2026-10-04_09.csv /tmp/.",
    "caution": "Para traerlo después a Windows es necesaria otra operación, por ejemplo docker cp.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": [
      "hdfs-put"
    ]
  },
  {
    "id": "hdfs-cp",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -cp",
    "short": "Copia archivos dentro de HDFS.",
    "definition": "Duplica un archivo o un directorio de una ruta HDFS a otra ruta HDFS.",
    "example": "hdfs dfs -cp /abc.txt /tmp2/abc.txt.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-mv",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -mv",
    "short": "Mueve o renombra dentro de HDFS.",
    "definition": "Cambia la ruta de un elemento HDFS sin crear una copia adicional en el origen.",
    "example": "hdfs dfs -mv /abc.txt /tmp2/.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-cat",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -cat",
    "short": "Muestra el contenido de archivos HDFS.",
    "definition": "Imprime el contenido de uno o más archivos HDFS por la salida estándar.",
    "example": "hdfs dfs -cat /tmp2/abc.txt.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-head",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -head",
    "short": "Muestra el inicio de un archivo HDFS.",
    "definition": "Imprime la parte inicial del contenido de un archivo almacenado en HDFS.",
    "example": "hdfs dfs -head /ventas/2026/10/01/ventas_2026-10-01_09.csv.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-rm",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -rm",
    "short": "Elimina archivos o directorios compatibles con la opción indicada.",
    "definition": "Elimina entradas de HDFS; borrar un directorio no vacío requiere opciones adicionales apropiadas.",
    "example": "hdfs dfs -rm /tmp2/abc.txt.",
    "caution": "Cuidado: el borrado afecta al sistema distribuido. Verifica la ruta antes de ejecutarlo.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-test",
    "parent": "hdfs-cli",
    "title": "hdfs dfs -test -e",
    "short": "Comprueba si existe una ruta HDFS.",
    "definition": "Devuelve un código de salida exitoso si la ruta existe; es útil dentro de condiciones de shell.",
    "example": "if hdfs dfs -test -e /ventas/2026/10/04/f.csv; then echo \"Ya existe\"; fi",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": []
  },
  {
    "id": "hdfs-script",
    "parent": "hdfs-cli",
    "title": "Script subir archivos",
    "short": "Automatiza nuevas cargas y evita duplicados.",
    "definition": "El script de prácticas explora /tmp/ventas_entrada, interpreta nombres ventas_YYYY-MM-DD_HH.csv, crea carpetas HDFS y usa -test -e antes de -put.",
    "example": "Si aparece ventas_2026-10-04_09.csv, lo coloca en /ventas/2026/10/04/; al repetir no lo duplica.",
    "caution": "Automatizar futuras cargas es distinto de reescribir el trabajo inicial ya completado.",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
    "related": [
      "pipeline",
      "hdfs-test",
      "hdfs-put"
    ]
  },
  {
    "id": "practicas-bd2",
    "parent": "bigdata2",
    "title": "Prácticas de Big Data 2",
    "short": "Ejercicios realmente desarrollados en el laboratorio.",
    "definition": "Recoge prácticas con Hadoop y los archivos ejecutables, separadas de los temas que únicamente aparecen en el PDF.",
    "example": "Flujo ATM con cinco transacciones, Hive, Parquet, Bash y Cron.",
    "caution": "Cron está configurado; queda sin comprobar su primer disparo programado.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 5–14 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "bash-atm",
    "parent": "practicas-bd2",
    "title": "Ingesta automática mediante Bash",
    "short": "Encadenar comprobaciones y ejecución de Hive.",
    "definition": "El script busca un CSV diario, evita duplicación en HDFS, registra particiones Hive con Beeline y recalcula Parquet.",
    "example": "bash /root/atm/subir_atm.sh 20261019: detectó fichero existente y actualizó Hive.",
    "caution": "Precisa HDFS y HiveServer2 activos; solo procesa la fecha indicada.",
    "status": "visto",
    "source": "Práctica ATM de Big Data 2, registrada el 22/10/2026",
    "related": [
      "hdfs-script",
      "beeline",
      "cron"
    ]
  },
  {
    "id": "caso-atm",
    "parent": "practicas-bd2",
    "title": "Práctica Big Data 2: cajeros ATM",
    "short": "Flujo batch CSV → HDFS → Hive → Parquet → Bash → Cron.",
    "definition": "Se generaron 5 transacciones bancarias, se cargaron en HDFS, se consultaron con tabla externa Hive, se transformaron a Parquet y se automatizó el flujo con Bash y Crontab.",
    "example": "Datos del 19/10/2026; COUNT=5 y SUM(importe)=630.00; 22/10/2026: Cron diario registrado.",
    "caution": "Aún no se ha observado ejecución automática de Cron; CDC y PySpark quedan para futuras prácticas.",
    "status": "visto",
    "source": "Práctica ATM de Big Data 2, registrada el 22/10/2026",
    "related": [
      "batch",
      "hive",
      "parquet",
      "cron"
    ]
  },
  {
    "id": "nifi",
    "parent": "bigdata2",
    "title": "Apache NiFi",
    "short": "Automatización gráfica de flujos de ingesta.",
    "definition": "El PDF describe procesadores y un flujo para leer archivos, modificar atributos y escribir o registrar resultados.",
    "example": "ConvertRecord para pasar registros CSV a JSON.",
    "caution": "Documentado en PDF; no se acredita aquí un flujo ejecutado por el alumno.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 19–28 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "nifi-processor",
    "parent": "nifi",
    "title": "Procesadores de NiFi",
    "short": "Componentes para tareas de un flujo.",
    "definition": "El material usa GenerateFlowFile, LogAttribute, UpdateAttribute y ConvertRecord con servicios lectores/escritores.",
    "example": "Renombrar archivos dinámicamente y convertir CSV a JSON.",
    "caution": "Un procesador requiere configuración y conexiones válidas.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 21–28 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "airflow",
    "parent": "bigdata2",
    "title": "Apache Airflow",
    "short": "Orquestación de tareas mediante dependencias.",
    "definition": "El temario introduce la evolución desde scripts hacia herramientas como Airflow y la construcción de flujos DAG.",
    "example": "Programar un DAG que coordine varias etapas de un pipeline.",
    "caution": "Se presenta como materia en PDF; no afirmamos que se desplegara.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», pág. 34 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "hbase",
    "parent": "bigdata2",
    "title": "Apache HBase",
    "short": "NoSQL de familias de columnas en Hadoop.",
    "definition": "Base de datos distribuida basada en ideas de Bigtable, para accesos a registros por clave y grandes conjuntos dispersos.",
    "example": "Tabla con clave de fila y familias de columnas.",
    "caution": "No es equivalente a Hive: atiende diferentes patrones de acceso.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 35–40 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "redis",
    "parent": "bigdata2",
    "title": "Redis",
    "short": "Almacén clave-valor en memoria.",
    "definition": "El PDF introduce hashes, conjuntos, listas y streams para cachés y colas de mensajería.",
    "example": "Guardar sesiones o procesar mensajes de una cola.",
    "caution": "No todo caso Redis ofrece persistencia o las mismas garantías de una base relacional.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 41–42 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "kafka",
    "parent": "bigdata2",
    "title": "Apache Kafka",
    "short": "Plataforma de eventos con productores y consumidores.",
    "definition": "El PDF muestra creación de topics, envío y consumo de mensajes mediante la consola.",
    "example": "Simular una sala de chat con kafka-console-producer y kafka-console-consumer.",
    "caution": "Un topic y sus particiones no son carpetas HDFS.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 43–45 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "kafka-particiones",
    "parent": "kafka",
    "title": "Topics y particiones Kafka",
    "short": "Ordenación y distribución de eventos.",
    "definition": "Los eventos de un topic se distribuyen en particiones; el PDF contiene un ejemplo bancario con depósitos y retiradas.",
    "example": "Topic de movimientos con dos particiones.",
    "caution": "La ordenación global entre distintas particiones no está garantizada.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 43–45 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "pyspark",
    "parent": "bigdata2",
    "title": "PySpark",
    "short": "API Python para procesamiento distribuido con Spark.",
    "definition": "El documento muestra SparkSession, lectura de JSON y operaciones sobre DataFrames.",
    "example": "spark.read.json('files/books.json').",
    "caution": "Su presencia en el temario no demuestra que la práctica haya sido completada.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», pág. 46 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "open-data-euskadi",
    "parent": "bigdata2",
    "title": "Open Data Euskadi y APIs",
    "short": "Acceso a conjuntos abiertos mediante servicios y endpoints.",
    "definition": "El documento estudia portales de datos abiertos y ejemplifica una API vasca de polen.",
    "example": "Acceso a API de Euskadi para datos de calidad de polen.",
    "caution": "Consultar un endpoint no equivale a mantener un pipeline productivo.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», págs. 29–33 · contenido del material, no implica práctica realizada",
    "related": []
  },
  {
    "id": "neo4j-concepto",
    "parent": "bigdata2",
    "title": "Knowledge Graph y Neo4j",
    "short": "Introducción a grafos de conocimiento.",
    "definition": "El final del PDF menciona la historia de Google Knowledge Graph y actividades con Neo4j.",
    "example": "Representar relaciones entre entidades como nodos y aristas.",
    "caution": "Solo es una introducción mencionada en el material.",
    "status": "visto",
    "source": "Big Data 2 · PDF «Aplicaciones de Big Data», pág. 46 · contenido del material, no implica práctica realizada",
    "related": []
  }
];
