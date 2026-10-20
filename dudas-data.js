window.YGG_DUDAS = [
  {
    "id": "prng-fiabilidad",
    "title": "¿En qué punto deja de ser fiable un generador pseudoaleatorio?",
    "kind": "duda",
    "state": "En estudio",
    "intro": "Una pregunta personal formulada durante el trabajo con números pseudoaleatorios.",
    "answer": "No existe un único umbral válido para todos los generadores. Cada algoritmo tiene un periodo, propiedades estadísticas y aplicaciones previstas. Uno puede ser suficiente para simulaciones y totalmente inadecuado para criptografía. Además, una secuencia repetible puede seguir siendo útil si el experimento exige reproducibilidad.",
    "warning": "Pendiente: contrastar el generador concreto que usemos y estudiar sus pruebas estadísticas, periodo y límites.",
    "links": [
      "prng",
      "periodo",
      "csprng"
    ]
  },
  {
    "id": "contrasena-seguridad",
    "title": "¿Un número aleatorio hace segura una contraseña?",
    "kind": "duda",
    "state": "Resuelta",
    "intro": "Duda personal sobre aleatoriedad, contraseñas y criptografía.",
    "answer": "Que un número sea aleatorio no significa automáticamente que una contraseña sea segura. También importan su longitud, el número de posibilidades y cómo se utiliza.",
    "warning": "Utiliza generadores adecuados para seguridad y gestiona correctamente las contraseñas. Un PRNG de simulación no basta.",
    "links": [
      "prng",
      "csprng"
    ]
  },
  {
    "id": "semilla-por-numero",
    "title": "¿Hace falta una semilla nueva para cada número?",
    "kind": "duda",
    "state": "Resuelta",
    "intro": "Duda personal para entender la relación entre la semilla y la secuencia.",
    "answer": "No. La semilla inicializa el estado del generador; el algoritmo actualiza su estado interno al producir nuevos valores. Por eso la misma semilla permite repetir la secuencia bajo las mismas condiciones.",
    "warning": "Reutilizar semillas en contextos de seguridad puede ser peligroso; en clase se aplica sobre todo a experimentos reproducibles.",
    "links": [
      "semilla",
      "prng"
    ]
  },
  {
    "id": "semilla-ml",
    "title": "¿Para qué sirve fijar la misma semilla en Machine Learning?",
    "kind": "dato",
    "state": "Dato interesante",
    "intro": "Conexión transversal con las clases de IA.",
    "answer": "Fijar la misma semilla permite reproducir una partición aleatoria de datos y comparar modelos de forma más controlada. La semilla es el punto de partida, no cada resultado. Para una reproducción rigurosa pueden hacer falta también versiones y otros parámetros constantes.",
    "warning": "No basta con una semilla para garantizar que cualquier ejecución o hardware arroje idénticos resultados.",
    "links": [
      "reproducibilidad",
      "semilla"
    ]
  }
];