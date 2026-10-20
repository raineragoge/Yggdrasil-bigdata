# Yggdrasil-bigdata · Atlas de Big Data

Proyecto web estático y multisección inspirado en el atlas personal **Yggdrasil IA**, adaptado a las clases de Big Data.

## Páginas

- **Árbol** (`yggdrasil.html`): jerarquía interactiva con explicaciones, ejemplos, búsquedas, enlaces a conceptos relacionados y progreso de aprendizaje.
- **Terminología** (`terminologia.html`): glosario conectado con el árbol, filtros por rama y estado.
- **Dudas** (`dudas.html`): dudas y conclusiones personales, **separadas del contenido del profesor**. Permite notas locales y exportación.
- **Laboratorio** (`laboratorio.html`): práctica reproducible de comandos de Docker, Hadoop y HDFS. Diferencia claramente **PowerShell (host)**, **Linux (contenedor)** y **HDFS**.
- **Bitácora** (`bitacora.html`): sesiones registradas, notas locales y exportación.

## Arranque

Abre `index.html` en un navegador moderno, o sirve la carpeta mediante `python -m http.server 8000` y entra en `http://localhost:8000/`.
No requiere compilación ni paquetes npm; CSS y JavaScript locales.

## Publicar en GitHub Pages

1. Crea en tu cuenta GitHub un repositorio llamado **`Yggdrasil-bigdata`** (sin añadir README remoto para simplificar el primer envío).
2. Sube todos los archivos y conserva la estructura de carpetas.
3. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. Tras el despliegue, la portada será `https://raineragoge.github.io/Yggdrasil-bigdata/` (la URL funcionará solo si se habilita Pages correctamente).

## Añadir contenido

Los conceptos viven exclusivamente en `data.js`, usado por Árbol y Terminología. Cada entrada incluye `id`, `parent`, `title`, `short`, `definition`, `example`, `caution`, `status`, `source` y `related`.

- `status: "visto"` → registrado en clases; `"ampliacion"` → complemento técnico no confirmado como contenido del profesor.
- Los objetos de `dudas-data.js` son personales e independientes.
- Los comandos de `laboratorio-data.js` deben revisarse cuando cambie el entorno de Docker.

**Almacenamiento:** El progreso, las notas de dudas y la bitácora local se guardan en `localStorage`, solo en el navegador usado. No se sincronizan automáticamente con GitHub ni entre ordenadores. Exporta las anotaciones si quieres conservarlas.

## Integridad de los apuntes

Este proyecto distingue lo registrado de clase de las ampliaciones didácticas. Algunas descripciones están reescritas y contrastadas conceptualmente, pero no equivalen a transcripciones literales del profesor.

## Organización

```
Yggdrasil-bigdata/
├── index.html
├── yggdrasil.html
├── terminologia.html
├── dudas.html
├── laboratorio.html
├── bitacora.html
├── data.js
├── dudas-data.js
├── laboratorio-data.js
├── assets/pages.css
└── README.md
```
