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
    "source": "Contenido registrado en las clases de Big Data",
    "related": []
  },
  {
    "id": "fundamentos",
    "parent": "bigdata",
    "title": "Fundamentos",
    "short": "Conceptos básicos, rendimiento y costes.",
    "definition": "Antes de ejecutar herramientas conviene entender qué datos gestionamos, a qué ritmo llegan y qué recursos necesitamos.",
    "example": "Elegir entre analizar ventas acumuladas una vez al día o detectar anomalías al momento cambia toda la arquitectura.",
    "caution": "",
    "status": "visto",
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
    "related": [
      "volumen",
      "velocidad",
      "variedad"
    ]
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
    "related": [
      "cluster"
    ]
  },
  {
    "id": "arquitectura",
    "parent": "bigdata",
    "title": "Arquitectura del dato",
    "short": "Sistemas de análisis, almacenes y patrones.",
    "definition": "Según el uso, los datos pueden alimentar operaciones diarias, analítica histórica o almacenamiento flexible.",
    "example": "El sistema de cobro registra pedidos; un almacén analítico examina tendencias mensuales.",
    "caution": "",
    "status": "visto",
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
    "related": [
      "lambda"
    ]
  },
  {
    "id": "ingesta",
    "parent": "bigdata",
    "title": "Ingesta y pipelines",
    "short": "Recorrido de los datos desde el origen hasta el consumo.",
    "definition": "Una arquitectura de datos encadena llegada de datos, validaciones, transformaciones, almacenamiento y publicación.",
    "example": "Los ficheros diarios de ventas pasan por una carpeta temporal, un script y un directorio HDFS.",
    "caution": "",
    "status": "visto",
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
    "related": [
      "orquestador"
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
    "related": []
  },
  {
    "id": "hadoop",
    "parent": "bigdata",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "source": "Contenido registrado en las clases de Big Data",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
    "related": []
  },
  {
    "id": "docker",
    "parent": "bigdata",
    "title": "Docker y entorno",
    "short": "Máquina anfitriona, contenedor, Linux y comandos.",
    "definition": "Los ejercicios distinguen el PowerShell del Windows anfitrión y la shell Linux dentro del contenedor Hadoop.",
    "example": "Ejecutar docker ps en PowerShell, docker exec -it hadoop bash y luego jps dentro.",
    "caution": "",
    "status": "visto",
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
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
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
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
    "source": "Prácticas de Hadoop y Docker · octubre 2026",
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
    "id": "shell",
    "parent": "docker",
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
    "parent": "docker",
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
    "parent": "docker",
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
    "parent": "docker",
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
    "parent": "bigdata",
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
    "id": "aleatoriedad",
    "parent": "bigdata",
    "title": "Aleatoriedad y reproducibilidad",
    "short": "Generadores, semillas y seguridad: conexiones importantes.",
    "definition": "El estudio de secuencias y semillas ayuda a entender simulaciones, experimentos y las limitaciones de la pseudoaleatoriedad.",
    "example": "Con una semilla fija puedes generar la misma secuencia al repetir un experimento.",
    "caution": "",
    "status": "visto",
    "source": "Reflexiones y dudas personales de clase",
    "related": []
  },
  {
    "id": "prng",
    "parent": "aleatoriedad",
    "title": "Generador pseudoaleatorio (PRNG)",
    "short": "Algoritmo determinista que produce una secuencia con apariencia aleatoria.",
    "definition": "Un PRNG actualiza un estado interno para producir números que, para ciertas aplicaciones, parecen aleatorios.",
    "example": "Semilla 42 → resultados que se repiten si se usa el mismo algoritmo y configuración.",
    "caution": "",
    "status": "visto",
    "source": "Reflexiones y dudas personales de clase",
    "related": [
      "semilla",
      "periodo"
    ]
  },
  {
    "id": "semilla",
    "parent": "aleatoriedad",
    "title": "Semilla aleatoria",
    "short": "Valor que inicializa el estado de un generador.",
    "definition": "La semilla establece el punto de partida del PRNG; normalmente el generador actualiza su estado con cada número, sin requerir una semilla nueva para cada salida.",
    "example": "Fijar random_state=42 permite repetir una partición aleatoria de datos en un experimento de ML.",
    "caution": "Una semilla idéntica puede no dar idénticos resultados entre bibliotecas o versiones diferentes.",
    "status": "visto",
    "source": "Reflexiones y dudas personales de clase",
    "related": [
      "prng",
      "reproducibilidad"
    ]
  },
  {
    "id": "periodo",
    "parent": "aleatoriedad",
    "title": "Periodo de un PRNG",
    "short": "Número de estados o salidas antes de repetirse el ciclo.",
    "definition": "Los PRNG de estado finito acaban entrando en ciclos; la longitud del periodo es una de sus propiedades, no la única medida de calidad.",
    "example": "Un generador con periodo pequeño empieza a repetir patrones antes de lo deseable.",
    "caution": "Periodo largo no garantiza impredecibilidad criptográfica.",
    "status": "visto",
    "source": "Reflexiones y dudas personales de clase",
    "related": []
  },
  {
    "id": "reproducibilidad",
    "parent": "aleatoriedad",
    "title": "Reproducibilidad",
    "short": "Capacidad de repetir condiciones y comparar resultados.",
    "definition": "Controlar semillas, versiones, datos y parámetros ayuda a comparar ejecuciones de forma más rigurosa.",
    "example": "Dos modelos reciben el mismo reparto de entrenamiento y prueba cuando fijamos correctamente la aleatoriedad del particionado.",
    "caution": "",
    "status": "visto",
    "source": "Reflexiones y dudas personales de clase",
    "related": []
  },
  {
    "id": "csprng",
    "parent": "aleatoriedad",
    "title": "CSPRNG",
    "short": "Generador pseudoaleatorio diseñado para usos criptográficos.",
    "definition": "Un CSPRNG persigue impredecibilidad incluso frente a adversarios que conocen cómo funciona, a diferencia de muchos PRNG de simulación.",
    "example": "La generación de claves requiere un generador apropiado para seguridad, además de longitud y configuración adecuadas.",
    "caution": "Un PRNG reproducible para pruebas de ML no debe asumirse seguro para contraseñas.",
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
    "related": []
  },
  {
    "id": "analitica",
    "parent": "bigdata",
    "title": "Análisis y decisiones",
    "short": "Del dato procesado a indicadores útiles.",
    "definition": "El objetivo práctico no es acumular archivos, sino extraer métricas, visualizar patrones y apoyar decisiones.",
    "example": "Comparar ingresos por mes y detectar diferencias en ventas.",
    "caution": "",
    "status": "visto",
    "source": "Contenido registrado en las clases de Big Data",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
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
    "status": "ampliacion",
    "source": "Ampliación técnica · para contextualizar",
    "related": []
  }
];
