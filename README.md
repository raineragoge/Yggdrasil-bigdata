# Yggdrasil-bigdata · Atlas de Big Data (V2)

Proyecto web estático y multisección inspirado en el atlas personal **Yggdrasil IA**, adaptado a las clases de Big Data.

## Páginas

- **Árbol** (`yggdrasil.html`): jerarquía interactiva con explicaciones, ejemplos, búsquedas, enlaces a conceptos relacionados y progreso de aprendizaje.
- **Terminología** (`terminologia.html`): glosario conectado con el árbol, filtros por rama y estado.
- **Dudas** (`dudas.html`): dudas y conclusiones personales, **separadas del contenido del profesor**. Permite notas locales y exportación.
- **Laboratorio** (`laboratorio.html`): 22 prácticas y comandos de Docker, Hadoop, HDFS, Python/Colab y Google Sheets. Diferencia claramente **PowerShell (host)**, **Linux (contenedor)**, **HDFS**, **Python/Colab** y **Sheets**.
- **Bitácora** (`bitacora.html`): sesiones registradas, notas locales y exportación.

## Contenido de la edición V2 (20/10/2026)

- **104 conceptos** en el árbol y en Terminología (77 iniciales + 27 nuevos).
- Rama **Matemáticas, probabilidad y estadística**: media, varianza, desviación estándar, valor esperado, Ley de los Grandes Números, TCL, Monte Carlo, cadenas de Markov y notación Big O.
- Rama **Sistemas distribuidos y consistencia**: teorema CAP, consistencia fuerte y eventual.
- **Almacenamiento y compresión**: RLE.
- **Analítica, arquitectura e ingesta**: A/B Testing, CDC, MDM y detección por umbrales de anomalías en sensores.
- **4 prácticas nuevas** en el Laboratorio: moneda (Python, 10.000 lanzamientos), dados (Google Sheets, 1.000 tiradas), varianza/desviación estándar (Python) y sensores (Python, 240.000 lecturas).
- **Bitácora** ampliada con temario y prácticas del 19/10/2026.
- Se respetan las cuatro dudas personales anteriores, diferenciadas del temario del profesor. Las ampliaciones técnicas están marcadas como tal.

## Arranque

Abre `index.html` en un navegador moderno, o sirve la carpeta mediante `python -m http.server 8000` y entra en `http://localhost:8000/`.
No requiere compilación ni paquetes npm; CSS y JavaScript locales.

## Publicar en GitHub Pages

1. El repositorio `raineragoge/Yggdrasil-bigdata` ya existe y contiene los archivos en la rama `main`.
2. Si trabajas en un clon o copia, conserva la estructura de carpetas.
3. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. Tras el despliegue, la portada será `https://raineragoge.github.io/Yggdrasil-bigdata/` (la URL funcionará solo si se habilita Pages correctamente).

## Añadir contenido

Los conceptos viven exclusivamente en `data.js`, usado por Árbol y Terminología. Cada entrada incluye `id`, `parent`, `title`, `short`, `definition`, `example`, `caution`, `status`, `source` y `related`.

- `status: "visto"` → tema del material de clase o práctica registrada (redactado didácticamente, no como cita literal); `"ampliacion"` → complemento técnico que no se atribuye al profesor.
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
