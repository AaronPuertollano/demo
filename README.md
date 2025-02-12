# README - Accesibilidad Web

## Análisis de Accesibilidad

**Enlace a la página analizada:**  
[Análisis en LightHouse](https://pagespeed.web.dev/analysis/https-aaronmarques24-netlify-app-html-galeria/q5eluio5uk?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=es&utm_source=lh-chrome-ext)

RENDIMIENTO: 93/100  |  ACCESIBILIDAD: 90/100  |  PRACTICAS RECOMENDADAS: 100/100  |  SEO: 82/100

**Principales fallos detectados con lighthouse:**

-Los colores de fondo y de primer plano no tienen una relación de contraste adecuada.

-Los elementos de encabezado no aparecen en orden secuencial descendente.

## Checklist de Accesibilidad

|              Norma                          |   Cumple   |   No Cumple   | No Examinable |
|---------------------------------------------|------------|---------------|---------------|
| 1.1.1 Contenido no textual                  |            |       X       |               |
| 1.3.1 Información y relaciones              |            |       X       |               |
| 1.3.2 Secuencia significativa               |            |       X       |               |
| 1.3.4 Orientación                           |      X     |               |               |
| 1.3.5 Identificar el propósito de la entrada|            |               |      X        |
| 1.4.1 Uso del color                         |      X     |               |               |
| 1.4.3 Contraste                             |            |      X        |               |
| 1.4.4 Cambiar el tamaño del texto           |      X     |               |               |
| 1.4.5 Imágenes de texto                     |            |      X        |               |
| 1.4.11 Contraste no textual                 |      X     |               |               |
| 1.4.12 Espaciado de texto                   |      X     |               |               |
| 1.4.13 Contenido al pasar el mouse o enfocar|      X     |               |               |
| 2.1.1 Teclado                               |      X     |               |               |
| 2.1.4 Atajos de teclado de caracteres       |            |      X        |               |
| 2.3.1 Tres destellos o menos del umbral     |      X     |               |               |
| 2.3.3 Animación a partir de interacciones   |      X     |               |               |
| 2.4.2 Página titulada                       |            |      X        |               |
| 2.4.3 Orden de enfoque                      |      X     |               |               |
| 2.4.6 Encabezados y etiquetas               |            |      X        |               |
| 2.5.3 Etiqueta en el nombre                 |            |               |       X       |
| 3.1.1 Idioma de la página                   |            |      X        |               |
| 3.1.2 Lenguaje de las partes                |            |               |       X       |
| 3.1.3 Palabras inusuales                    |            |               |       X       |
| 3.2.3 Navegación consistente                |            |       X       |               |
| 3.3.2 Etiquetas o instrucciones             |            |       X       |               |
| 3.3.3 Sugerencia de error                   |            |               |        X      |

**Principales fallos detectados con la checklist:**

-Etiquetas mal colocadas, incluyendo el idioma de la pagina (Inglés).

-Accesibilidad de la información pobre, sobretodo con las imagenes.

-Navegación incosistente y falta de cojerencia en los encabezados.

## Cambios Implementados

Se realizaron las siguientes mejoras para cumplir con los estándares de accesibilidad:

-Cambio de colores para mejorar del contraste.

-Cambio de etiquetas HTML para mejorar la lectura de narrador.

-Cambio de lenguaje en HTML de eng a es.

-Introducción de texto explicativo para imagenes tato visual o para lector.

-Aligerar la carga eliminando elementos externos como google fonts.

-Cambio en el metodo de carga de las imagenes a lazy, asi se cargarán solo cuando sea necesario.

**Enlace a la página modificada:**  
[Análisis en LightHouse](https://pagespeed.web.dev/analysis/https-demo5262-netlify-app-accesible-html-galeria/lc5kfkb48q?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=es&utm_source=lh-chrome-ext)

RENDIMIENTO: 100/100  |  ACCESIBILIDAD: 100/100  |  PRACTICAS RECOMENDADAS: 100/100  |  SEO: 91/100