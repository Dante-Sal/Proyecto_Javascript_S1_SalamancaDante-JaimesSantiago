# Proyecto JavaScript - Formula 1

Este proyecto consiste en una página de visualización de items concernientes a la temática de Formula 1. El objetivo principal del proyecto se enfocaba en el poder acceder a diferentes elementos dentro de una API desarrollada con la herramienta MockAPI, permitiendo al usuario observar los detalles sobre equipos, pilotos, vehículos y circuitos de manera intuitiva y accesible.

El sitio se divide en tres partes principales: la página de inicio/visualización de equipos, la sección de visualización de pilotos, la sección de visualización de vehículos y su equivalente en circuitos.

Además, justo al inicio posee una pantalla de login no funcional, aunque no permite el acceso al sitio a no ser que se ingrese algún dato en los campos solicitados.

| Tabla de contenidos |
|--------------------|
| [Maquetación en Figma](#Maquetacion) |
| [¿Cómo ejecutar este archivo?](#Ejecucion) |
| [Funcionamiento del programa](#Funcionamiento) |
| [Inicio de sesión](#Login) |
| [Pantalla de inicio](#Inicio) |
| [Menú de selección de pilotos/vehículos](#Menu) |
| [Pantalla de visualización de pilotos](#Pilotos) |
| [Pantalla de visualización de vehículos](#Vehiculos) |
| [Pantalla de visualización de circuitos](#Circuitos) |

<a name="Maquetacion"></a>

## Maquetación en Figma

   [https://www.figma.com/design/fOPhs4MTcEUvajGk4cxH5I/F1?node-id=2-4&p=f](https://www.figma.com/design/fOPhs4MTcEUvajGk4cxH5I/F1?node-id=2-4&p=f)

<a name="Ejecucion"></a>

## ¿Cómo ejecutar este archivo?

Puede visualizar el sitio desarrollado a lo largo de este proyecto de las siguientes dos maneras:

1. Accediendo directamente a través del siguiente link:

   [https://dante-sal.github.io/Proyecto_Javascript_S1_SalamancaDante-JaimesSantiago/](https://dante-sal.github.io/Proyecto_Javascript_S1_SalamancaDante-JaimesSantiago/)

2. Clonando el repositorio desde una terminal a través del siguiente comando:

   ```git clone https://github.com/Dante-Sal/Proyecto_Javascript_S1_SalamancaDante-JaimesSantiago```

   Para luego acceder al archivo index.html y abrirlo con el navegador web de su preferencia.

<a name="Funcionamiento"></a>

## Funcionamiento del programa

Como ya se mencionó, este proyecto se encuentra dividido en cuatro secciones bien diferenciadas, de las cuales derivan todos los demás módulos relacionados:

<a name="Login"></a>

#### 1. Inicio de sesión (`index.html`)

Es la página principal del sistema, donde los usuarios ingresan sus credenciales para acceder al panel. Utiliza formularios HTML con campos para nombre de usuario y contraseña (así como un espacio para designar si quien ingresa es administrador o usuario). El diseño es simple pero funcional, centrado y con estilos personalizados para resaltar la temática manejada y encajar con el propósito del sitio.

Este apartado es meramente estético, exceptuando el hecho ya mencionado de que el sitio, a través de un sencillo sistema de verificación a través del atributo 'required', no permite el acceso a no ser que todos los campos hayan sido llenados (enviando una alerta en caso de que se intente acceder sin ingresar credenciales).

<a name="Inicio"></a>

### 2. Pantalla de inicio (`home.html`)

Tras haber atravesado la primera pequeña sección, se accede al primer apartado realmente importante de este sitio: la pantalla de inicio o casa.

Aquí se mostrará un menú 100% responsivo que le permitirá al usuario elegir si desea ver la lista de circuitos disponibles al momento o si desea ingresar y observar los miembros o el vehículo actual de algún equipo específico.

Mediante una grilla CSS (`display: grid;`) y sus propiedades derivadas, se realizó un diseño que se adapta a diferentes dispositivos (con media queries) que muestra los logotipos de cada una de las escuderías disponibles en la base de datos, extrayendo las imágenes y nombres de cada una mediante funciones en JavaScript y manejo de AXIOS.

Este apartado, al igual que todas las demás páginas del sitio (exceptuando, desde luego, la pantalla de inicio de sesión), posee una sección lateral donde se puede recargar la página y, una vez accedido alguno de los subapartados disponibles, permitirá regresar a este apartado en el que nos encontramos actualmente. Sumado a esto, en la parte superior derecha se hace uso de un botón de cierre de sesión que se mantendrá en ese lugar a lo largo de todas las páginas disponibles para permitir un cierre de sesión rápido y eficaz cuando el usuario lo desee (esté donde esté).

<a name="Menu"></a>

#### 3. Menú de selección de pilotos/vehículos (`team-menu.html`)

Este pequeño apartado sirve de puente entre la página de inicio y la de visualización, tanto de vehículos como de pilotos, ya que, una vez seleccionado el equipo deseado, se mostrará este menú que, en esencia, solicita al usuario especificar cual de los dos subsitios relacionados al equipo desea ver.

Justo antes de acceder a esta página, mediante un verbo HTTP PUT, se guarda un id en la API trabajada ([F1 API](https://68288b9d6075e87073a41cba.mockapi.io/f1_api)) que servirá para poder identificar el equipo seleccionado y así poder mostrar los datos correctos, de acuerdo a los deseos del usuario final. Una vez guardado este id, se usará junto a una solicitud GET que extaerá las imágenes alojadas en el diccionario "resources" de cada equipo en la llave "teams" de la API (esto para poder decorar la página de acuerdo a la escudería en cuestión: background-image con el logotipo o fondo relacionado a la escudería e imágenes representativas de los pilotos y vehículos del equipo).

El diseño responsivo de este apartado se basó también en la propiedad `grid` de CSS y mantiene el logotipo de F1 para regresar al home, de la misma manera en que lo hace con el botón de cierre de sesión o log out.

<a name="Pilotos"></a>

### 4. Pantalla de visualización de pilotos (`team-drivers.html`)

Una vez el usuario, tras hacer clic el botón correspondiente, se encuentra en esta sección, podrá ver todos los pilotos disponibles en este equipo (inicialmente dos, aunque la página está preparada para adaptarse, en caso de haber más, con el uso de un container con scroll horizontal u `overflow: auto;`).

Esta sección se divide en dos partes: el visualizador y el menú de selección basado en `.addEventListener` y propiedades CSS dinámicas (es decir, siendo modificadas desde un archivo .js).

El visualizador por defecto consume los datos correspondientes al líder del equipo en cuestión, mostrando nombre (name), número de carrera (driver_number), logotipo sin fondo (.png) de la escudería (alojado en la base de datos del equipo, es decir, clave "teams" y sección "resources"/"no_background_logo") y nombre del equipo (team).

Mediante el uso de `.addEventListener`, el programa detecta si se hace clic en algún otro piloto disponible, agregándole un border para resaltar que ese fue el piloto seleccionado y extrayendo un id, posteriormente la data del piloto, que se le asigna a cada contenedor de cada piloto cuando son generados mediante solicitudes GET.

Ambas secciones de este apartado usan un bucle `for` para mostrar los pilotos, sólo que el visualizador ejecuta también un condicional para verificar que el piloto actual sea (no sólo del equipo en cuestión) el líder del equipo y una vez que lo encuentra ejecuta un `break` que rompe el ciclo; en cambio el menú ejecuta el bucle hasta que completa todo el ciclo por los pilotos disponibles, naturalmente mostrando sólo aquellos que pertenezcan a la escudería seleccionada.

Este apartado no posee un diseño responsivo robusto, pero sigue siendo accesible desde dispositivos móviles, al tiempo que el más rico en animaciones de todo el sitio web.

<a name="Vehiculos"></a>

### 5. Pantalla de visualización de vehículos (`team-vehicles.html`)

La pantalla de visualización de vehículos es bastante similar a la de pilotos, con la diferencia de que es mucho menos compleja, ya que al sólo haber una referencia de vehículo por equipo, no precisa de panel de selección interactivo menú.

En esencia, funciona exactamente igual que la sección "visualizador" de la [pantalla de visualización de pilotos](#Pilotos), difiriendo en que la que es el foco de atención en este momento extrae más datos de la API, siendo estos datos los alojados en las claves "vehicles"/"model", "teams"/"resources"/"no_background_logo", "vehicles"/"engine", "vehicles"/"max_speed_kmh", "vehicles"/"acceleration_0_100" y "vehicles"/"team".

Este apartado no posee un diseño responsivo robusto, pero sigue siendo accesible desde dispositivos móviles.

<a name="Circuitos"></a>

### 6. Pantalla de visualización de circuitos (`circuits.html`)

Finalmente, la pantalla de visualización de circuitos ejecuta una solicitud GET y AXIOS para llenar un contenedor con una grilla de dos columnas de ancho que contendrá el menú de selección de circuito.

Cada circuito posee una imagen personalizada y un nombre que será inyectado en el HTML mediante un bucle `for`, la función de JavaScript `.insertAdjacentHTML` y el parámetro `beforeend` para que los nuevos elementos HTML ingresados se creen al final del contenedor. Además, cada contenedor de cada circuito posee un botón con un id único que se activará al hacer clic en él con un `.addEventListener`.

Al seleccionar algún circuito específico, el `.addEventListener` detectará automáticamente el evento, extrayendo el id único del target o elemento clickeado. Este id ayudará al programa a identificar el circuito deseado, escogiendo efectivamente los datos concernientes a este de la API trabajada.

Cuando se selecciona un circuito, la función de JavaScript vaciará el contenedor donde antes se alojaba el menú de selección de circuitos, llenándolo con la nueva data correspondiente al circuito específico al que el usuario deseaba acceder.

Si se quiere regresar al panel de selección de circuitos, al final de la página se encontrará un botón de regresar que, en esencia, con ayuda de un atributo `onclick="location.reload()"` entregado directamente a la etiqueta HTML del botón, recargará la página (lo que básicamente significa que el sitio regresará a su estado original o menú).