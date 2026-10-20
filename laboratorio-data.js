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
  }
];