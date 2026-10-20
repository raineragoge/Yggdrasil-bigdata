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
    "id": "stat1",
    "group": "estadistica",
    "context": "Python · Google Colab",
    "title": "10.000 monedas: Ley de los Grandes Números",
    "cmd": "import random\nimport matplotlib.pyplot as plt\n\nrng = random.Random(42)\ncaras = 0\nproporciones = []\n\nfor n in range(1, 10001):\n    if rng.randint(0, 1) == 1:\n        caras += 1\n    proporciones.append(caras / n)\n\nprint('Lanzamientos:', len(proporciones))\nprint('Caras:', caras)\nprint('Porcentaje:', round(100 * proporciones[-1], 2), '%')\nplt.plot(range(1, 10001), proporciones)\nplt.axhline(0.5, linestyle='--', label='Esperanza teórica: 50 %')\nplt.xlabel('Número de lanzamientos')\nplt.ylabel('Proporción acumulada de caras')\nplt.legend()\nplt.show()",
    "desc": "Repite la práctica de moneda: la proporción acumulada de caras tiende a 0,5, aunque fluctúa. Pega el código en una celda de Python de Google Colab.",
    "tone": "python"
  },
  {
    "id": "stat2",
    "group": "estadistica",
    "context": "Google Sheets · Español",
    "title": "1.000 tiradas de dos dados: media acumulada",
    "cmd": "A2: =ALEATORIO.ENTRE(1;6)\nB2: =ALEATORIO.ENTRE(1;6)\nC2: =A2+B2\nD2: =PROMEDIO($C$2:C2)\n\nArrastra las cuatro fórmulas hasta la fila 1001.\nObserva cómo evoluciona D2:D1001 y compárala con 7.",
    "desc": "Práctica en Google Sheets con configuración regional española (separador «;»). A y B simulan dados independientes y D calcula la media acumulada de las sumas.",
    "tone": "sheets"
  },
  {
    "id": "stat3",
    "group": "estadistica",
    "context": "Python · Google Colab",
    "title": "Varianza y desviación estándar",
    "cmd": "import statistics\n\ndatos = [2, 4, 6]\nmedia = statistics.mean(datos)\nvar_poblacional = statistics.pvariance(datos)\ndesv_poblacional = statistics.pstdev(datos)\n\nprint('Media:', media)\nprint('Varianza poblacional:', var_poblacional)\nprint('Desviación estándar poblacional:', desv_poblacional)\nprint('Varianza muestral:', statistics.variance(datos))",
    "desc": "Ejemplo didáctico adicional: compara varianza poblacional (divide por N) y muestral (divide por n−1). No confundas ambas fórmulas.",
    "tone": "python"
  },
  {
    "id": "stat4",
    "group": "estadistica",
    "context": "Python · Google Colab",
    "title": "240.000 lecturas: simulación de sensores y anomalías",
    "cmd": "import random\n\nrng = random.Random(42)\nregistros = 0\nanomalías_inyectadas = 0\nanomalías_detectadas = 0\n\nfor sensor in range(10000):\n    for hora in range(24):\n        temperatura = rng.uniform(20, 80)\n        humedad = rng.uniform(30, 70)\n        vibracion = rng.uniform(0, 5)\n        presion = rng.uniform(90, 110)\n\n        if rng.random() < 0.01:\n            temperatura = 95\n            anomalías_inyectadas += 1\n\n        fuera_de_rango = (\n            not 20 <= temperatura <= 80 or\n            not 30 <= humedad <= 70 or\n            not 0 <= vibracion <= 5 or\n            not 90 <= presion <= 110\n        )\n        if fuera_de_rango:\n            anomalías_detectadas += 1\n        registros += 1\n\nprint('Registros:', registros)\nprint('Anomalías inyectadas:', anomalías_inyectadas)\nprint('Anomalías detectadas:', anomalías_detectadas)",
    "desc": "10.000 sensores × 24 horas. Genera temperaturas (20–80), humedades (30–70), vibraciones (0–5) y presiones (90–110). Un 1 % aproximado de las lecturas se altera a propósito para detectarlas por umbrales; no son datos reales.",
    "tone": "python"
  }
];
