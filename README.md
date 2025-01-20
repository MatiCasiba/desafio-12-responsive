* Nombre: Matias Casiba 
* Link Repo GitHub: https://github.com/MatiCasiba/desafio-12-responsive
* Link Netlify:

# Desafio 12
En este deasio se estará trabajando con responsive;

## Carpetas
Como son 4 ejercicios a realizar, crearé una carpeta pages, en estas estarán las carpetas con los ejercicios a, b, c y d, cada undo con su archivo html, y js (en js voy a extraer los estilos de la carpeta css, donde habrá estilos para cada ejercicio)
* index.html -> contendrá un título y las listas estarán dentro de un contenedor:
```sh
<body>
    <div class="paginas">
      <ul>
        <li><a href="src/pages/ejercicio-a/ejercicio-a.html" target="_blank">Mi Página Web</a></li>
        <li><a href="src/pages/ejercicio-b/ejercicio-b.html" target="_blank">Galeria</a></li>
        <li><a href="src/pages/ejercicio-c/ejercicio-c.html" target="_blank">Formulario</a></li>
        <li><a href="src/pages/ejercicio-d/ejercicio-d.html" target="_blank">Tarjeta</a></li>
      </ul>
    </div>
    <script type="module" src="/src/main.js"></script>
</body>
```
* style.css:
```sh
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --color-1: #111;
    --color-2: #80b9dd;
    --color-3: #e69797;
}

html{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 100%;
    background-color: var(--color-3);
}

h1{
    font-size: 3rem;
    text-align: center;
    margin-bottom: 30px;
}

.paginas{
    font-size: 1.5rem;
    text-align: center;
    max-width: 400px;
    margin: auto;
}

li{
    margin-bottom: 20px;
    background-color: aqua;
    padding: 15px;
    list-style: none;

    border-radius: 10px;
    box-shadow: 2px 2px 5px;
}

a{
    text-decoration: none;
    color: black;
}
```

## Punto A
Diseño de una página web básica, tengo que crear una página simple con un encabezado, un menú de navegación, un contenido principal y un pie de página. Así se verá el archivo index.html:
```sh
  <body>
    <header>
      <h1>Mi Página Web</h1>
      <input type="checkbox" id="menu">

      <nav>
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Acreca de</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </nav>

      <div class="menu-toogle">
        <label for="menu" class="menu-toogle label">
          <span class="menu-toogle top-bread"></span>
          <span class="menu-toogle meat"></span>
          <span class="menu-toogle bottom-bread"></span>
        </label>
      </div>
    </header>

    <main>

      <div class="contenido">
        <div class="card">
          <h2>Bienvenido a mi sitio web</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="contenedor-tarjetas">
          <div class="card">
            <h3>Sobre mi</h3>
            <p class="texto">Aquí puedes conocerme un poco mejor</p>
          </div>
          <div class="card">
            <h3>Mis Proyectos</h3>
            <p class="texto">Descubre mis últimos proyectos</p>
          </div>
        </div>
      </div>

      <aside class="sidebar">
        <h2>Contenido Adicional</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fuga aliquam corrupti, deserunt eum pariatur quisquam reprehenderit. Placeat architecto omnis quasi sint ab consequuntur hic ex magni eligendi, expedita accusamus a sapiente qui, veritatis suscipit! Optio corporis architecto quia minus.</p>
      </aside>

    </main>
    <footer>© 2025 Todos los derechos reservados.</footer>
    <script type="module" src="/src/pages/ejercicio-a/main-a.js"></script>
  </body>
```

### Variables de colores
Usaré un :root paa crear varibales de colores, asi luego asignarlos en clases o elementos con un var():
```sh
:root{
    --color1: #383d3b;
    --color2: #eee5e9;
    --color3: #7c7c7c;
    --color4: #92dce5;
    --color5: #52dee5;
}
```

### Header
Personalizaré el header y dentro de este elemento, crearé un menu toogle donde se encontrarán los elementos li que contiene el nav:
```sh
#HEADER;
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
    color: white;
    position: relative;
}

nav {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #222;
    display: none;
}

nav ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li{
    text-align: center;
    padding: 15px;
    font-size: 1.2rem;
}

nav ul li a{
    color: white;
    text-decoration: none;
    display: block;

}

# checbox oculto:
#menu{
    display: none;
}

#menu:checked ~ nav {
    display: block;
}

# Estilo para el iconono e hamburguesa
.menu-toogle{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 30px;
}

.menu-toogle span{
    background-color: white;
    height: 4px;
    width: 30px;
    margin: 4px 0;
    transition: transform 0.3s, opacity 0.3s;
}

# un efecto de animacion para el menu toogle:
#menu:checked ~ .menu-toogle .top-bread{
    transform: translateY(8px) rotate(45deg);

}
#menu:checked ~ .menu-toogle .meat{
    opacity: 0;
}

#menu:checked ~ .menu-toogle .bottom-bread{
    transform: translateY(-8px) rotate(-45deg);
}
```
* El menu está oculto (quien hace esto es display: none) y solo se mostrará cuando el checbox está marcado
* El menú toogle tendrá una animacion, este cambiara a una x cuando el usuario seleccione el menu

### Cuerpo
En el elemento cuerpo, le daré un estilo con fuente, tamaño de fuente y color de fondo para la página:
```sh
body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 100%;
    background-color: var(--color2);
}
```

### Diseños en el texto
Con los subtitulos y los textos que contienen la tarjetas, estaré trabajando en tamñaos con estos:
```sh
h1{
    font-size: 2.5rem;
    letter-spacing: 2px;
}
h2{
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 10px;
}
h3{
    font-size: 1.5rem;
    margin-bottom: 10px;
}
p{
    font-size: 1.3rem;
    color: var(--color1);
    letter-spacing: 1px;
}
```

### CARDS - Tarjetas
Dentro del elemento body se encontrarán 3 contenedores con la clase "card", le estaré dando diseño con esta clase:
```sh
.card{
    # color y tamaño de la tarjeta 
    background-color: var(--color4);
    max-width: 400px;

    # centrado y relleno de la tarjeta
    margin: auto;
    margin-top: 15px;
    padding: 3%;

    # bordes de la tarjeta 
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border:1px solid var(--color3);

    # sombra
    box-shadow: -10px 5px 10px var(--color1);
}
```

#### Breakpoints
La página se comportará de manera diferente respecto a tamaños de pantalla, al principio lo diseñe pensando en un dispositivo chico (celular/mobil), luego verás que va cambiando un poco la página a medidia que se va agranadando la pantalla. Para lograr esto, trabajaré con media Query en small, medium, large y extra large:

* Small -> Muestra el menú de navegación en forma de lista vertical:
```sh
# small (>= 576px)
@media screen and (min-width: 576px){
    # Mostrando el menu de forma vertical
    nav{
        position: static;
        display: block;
        background: none;
        width: auto;
    }
    nav ul{
        display: block;
    }
    nav ul li{
        padding: 2px 0;
        text-align: left;
    }
    nav ul li a{
        padding: 10px 15px;
    }

    # ocultando el menu toogle
    .menu-toogle{
        display: none;
    }
}
```
* Medium -> Muestra el menú de navegación horizontalmente:
```sh
# medium (>=768px) 
@media screen and (min-width: 768px){
    .contenedor-tarjetas{
        display: flex;
        width: 500px;
        margin: auto;
        gap: 40px;
    }
    nav{
        position: static;
        display: flex;
        background: none;
        width: auto;
    }
    nav ul{
        display: flex;
        gap: 20px;
    }
}
```

* Large -> Se aumenta el tamaño de las fuentes y añade más espacio entre las secciones:
```sh
# large (>=992px)
@media screen and (min-width: 992px){
    .contenedor-tarjetas{
        display: block;
        width: 700px;
    }
    .card{
        max-width: 700px;
    }

    nav ul li{
        text-align: center;
        padding: 20px;
        font-size: 1.5rem;
    }

    h1{
        font-size: 3.5rem;
        letter-spacing: 2px;
    }
    h2{
        font-size: 3rem;
        text-align: center;
        margin-bottom: 10px;
    }
    h3{
        font-size: 2.5rem;
        margin-bottom: 10px;
        text-align: center;
    }
    p{
        font-size: 1.8rem;
        color: var(--color1);
        text-align: end;
        letter-spacing: 1px;
        margin-top: 20px;
    }
    .texto{
        text-align: center;
    }

    .card{
        margin-top: 50px;
        margin-bottom: 50px;
    }
}
```
* Extra Large -> Va a muesdtrar una columna lateral con contenido adicional:
```sh
# agregué un nuevo elemento dentro del elemento main en index.html
<aside class="sidebar">
    <h2>Contenido Adicional</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fuga aliquam corrupti, deserunt eum pariatur quisquam reprehenderit. Placeat architecto omnis quasi sint ab consequuntur hic ex magni eligendi, expedita accusamus a sapiente qui, veritatis suscipit! Optio corporis architecto quia minus.</p>
</aside>

# css

# extra large(>=1200px)
@media screen and (min-width: 1200px){
    main{
        display: flex;
        justify-content: space-between;
        margin: auto;
    }
    .contenido{
        width: 65%;
    }
    .sidebar{
        display: block;
        width: 30%;
        background-color: var(--color5);
        padding: 20px;
        border: 1px solid var(--color3);
        border-top: none;
        box-shadow: 10px 2px 10px var(--color1);

    }
}

```

* Extra extra large -> se amplía el ancho máximo del contenido principal:
```sh
@media screen and (min-width: 1400px){
    .contenido{
        width: 80%;
    }
    .sidebar{
        width: 20%;
    }

    .card{
        max-width: 900px;
    }
    .contenedor-tarjetas{
        width: 900px;
    }
}
```

### Footer
En la página al final habra en elemento footer con un texto:
```sh
footer {
    font-size: 0.8rem;
    text-align: center;
    background: var(--color1);
    color: var(--color2);
    padding: 10px;
    margin-top: 65px;
}
```

## Punto B
Tengo que crear una galeria, que a medida que aumenta la pantalla del dispositivo que sea usado, las imágenes se irá posisionando con las medias querys solicitadasL (extra small, small, medium, large, extra large, extra extra large). Primero fue pensado de manera extra small.
```sh
#ejercicio-b.html:

<body>
    <header>
        <h1>Galeria</h1>
    </header>
    <main>
        <div class="imagenes">
            <img src="/public/image/image-1.webp" alt="image NY 1">
            <img src="/public/image/image-2.webp" alt="image NY 2">
            <img src="/public/image/image-3.webp" alt="image NY 3">
            <img src="/public/image/image-4.webp" alt="imagen ventana de hogar">
            <img src="/public/image/image-5.webp" alt="imagen del centro de shibuya">
            <img src="/public/image/image-6.webp" alt="imagen montaña de japon">
        </div>
    </main>

    <script type="module" src="/src/pages/ejercicio-b/main-b.js"></script>
</body>
```

### Breakpoints - Galeria
Estos breakpoints se encontrarán en el archivo style-b.css dentro de la carpeta css:

* extra small -> Muestra las imágenes en una sola columna.
```sh
header{
    padding: 5px;
    background-color: var(--color-1);
    box-shadow: 0 5px 10px;
}
h1{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    color: var(--color-3);
    
}

.imagenes {
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 10px; 
}

.imagenes img {
    width: 300px;
    max-width: 400px; # alcanza hasta 400px
    object-fit: cover; # con esto evito deformaciones
    border-radius: 5px;
}
```

* small -> muestro las imágenes en dos columnas:
```sh
@media screen and (min-width: 576px) {
    .imagenes {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .imagenes img {
        width: 45%; # Cada imagen ocupa el 45% del ancho (2 columnas)
    }
}
```

* medium -> muestro las imágenes en tres columnas:
```sh
@media screen and (min-width: 768px){

    .imagenes img{
        width: 30%; # 3 columnas
    }
}
```

* large -> va a aumentar el tamaño de las imágenes.
```sh
@media screen and (min-width: 992px){

    .imagenes img {
        width: 32%;
    }
}
```

* extra large -> añado un espacio entre las filas de imágenes:
```sh
@media screen and (min-width: 1200px){

    .imagenes{
        gap: 20px;
    }
}
```

* extra extra large -> Permite que las imágenes se ajusten automáticamente a su tamaño original:
```sh
@media screen and (min-width: 1400px){
    .images img{
        width: 100%;
    }
}
```

## Punto C
En este punto debo de crear un formulario con diferentes campos (nombre, correo electronico, mensaje), como en los puntos anteriores, tambien acá trabajaré con breakpoints, el formulario se comportará de manera distinta a medida que se agrande la pantalla. Lo construí de la siguiente forma:
```sh
# ejerecicio-c.html
<body>

    <div class="formulario">

        <form action="#">

            <div class="image">
                <img src="/image/palmeras.webp" alt="imagen palmeras">
            </div>

            <div class="datos">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
            </div> 

            <div class="datos">
                <label for="email">Correo electronico:</label>
                <input type="email" name="email" id="email">
            </div>

            <div class="datos">
                <label for="password">Contraseña:</label>
                <input type="password" name="password" id="pasword">
            </div>

            <div class="datos">
                <label for="documento">Documento:</label>
                <input type="text" pattern="[0-9]+" title="solo números" name="documento" id="documento">
            </div>

            <div class="datos">
                <label for="info">Sobre vos...</label>
                <textarea name="info" id="info"></textarea>
            </div>

        </form>

        <div class="boton"><button>Enviar:</button></div>
    </div>

    <script type="module" src="/src/pages/ejercicio-c/main-c.js"></script>
</body>
```

### Textarea
Le agregué un textarea donde el usuario podrás escribir más sobre su persona, algo a destacar de este textarea, es que se podrá extender solo hacia abajo, esto lo logro con un resize en vertical:
```sh
#ejercicio-c.html
<div class="datos">
    <label for="info">Sobre vos...</label>
    <textarea name="info" id="info"></textarea>
</div>

#style-c.css
textarea{
    padding: 10px 20px;
    width: 100%;
    border: 2px solid var(--color-5);
    border-radius: 10px;
    background-color: var(--color-2);
    color: var(--color-5);
    text-align: right;
    resize: vertical;   
}

textarea:hover{
    background-color: var(--color-3);
    border-color: var(--color-4);
}
```

#### Breakpoints - Formulario

* Primero muestro los campos del formulario uno debajo del otro:
```sh
body{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 100%;
    background-color: var(--color-1);
}

form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
label{
    letter-spacing: 2px;
    font-size: 1.2rem;
    margin-top: 20px;
    color: var(--color-5);
}

.formulario{
    width: 90%;
    padding: 20px;
    background: linear-gradient(90deg, var(--color-4), var(--color-2));
    margin: auto;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 0 0 5px 4px var(--color-5);
}

.image{
    display: flex;
    justify-content: center;
}

.image img{
    width: 100%;
    /* max-width: 600px; */
    border: 2px outset var(--color-4);
    border-radius: 20px;
    box-shadow: 0 0 10px 5px var(--color-5);
}
.datos{
    display: flex;
    flex-direction: column;
}
.datos label{
    margin-bottom: 10px;
}

input{
    padding: 10px 20px;
    width: 100%;
    border: 2px solid var(--color-5);
    border-radius: 20px;
    background-color: var(--color-2);
    color: var(--color-5);
    text-align: right;
}

.boton{
    display: flex;
    font-size: 1rem;
    margin-top: 20px;
}

button{
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 700;
    margin: auto;
   
    background-color: var(--color-3);
    color: var(--color-5);
    border: 2px solid var(--color-5);
    border-radius: 20px;
}
input:hover{
    background-color: var(--color-3);
    border-color: var(--color-4);
}
button:hover{
    background-color: var(--color-2);
    color: var(--color-4);
    border-color: var(--color-4);
}
```

* Small -> Organiza los campos en dos columnas:
```sh
@media screen and (min-width: 576px){
    form{
        display: grid; # me permite dividir
        grid-template-columns: 1fr 1fr; # defino la cantidad y tamaño de columnas 
    }
    .image{
        grid-column: span 2; # con esto defino en que columna empieza y cuantas ocupa
    }
    .boton{
        grid-column: span 2;
    }
}
```

* Medium -> Aumenta el tamaño de los campos de texto:
```sh
@media screen and (min-width: 768px){
    input{
        padding: 15px;
        font-size: 20px;
    }
    button{
        font-size: 20px;
        padding: 15px 30px;
    }
}
```

* Large -> Añade etiquetas flotantes a los campos:
```sh
@media screen and (min-width: 992px){
    .datos{
        position: relative;
    }
    .datos label {
        position: absolute;
        top: -12px;
        left: 10px;
        padding: 0 5px;
        font-size: 15px;
    }
    input{
        padding-top: 20px;
    }

    .image img{
        width: 100%;
        margin-bottom: 20px;
    }
}
```

* Extra large -> Centra el formulario en la página:
```sh
@media screen and (min-width: 1200px){
    .formulario{
        width: 50%;
        margin: 10px auto;
        border: 2px solid var(--color-5);
        padding: 30px;
        border-radius: 10px;
    }
    .image img{
        border-radius: 10px;
    }
}
```

* Extra extra large -> Añade más espacio entre los campos:
```sh
@media screen and (min-width: 1400px){
    form{
        gap: 50px;
    }
    .boton{
        margin-top: 30px;
    }
}
```

## Punto D - Tarjeta de producto
En este punto estaré creando una tarjeta de un producto, le estaré dando diseño y que se vaya comportando de distinta forma a medida que se agrande la pantalla

#### Breakpoints - Tarjeta de producto

* Extra-small: Muestra la imagen encima del contenido:
```sh
body{
    background-color: var(--color-4);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 100%;
}

h2{
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
}
p{
    font-size: 1.5rem;
    margin: 10px 0 20px 0;
    text-align: left;
}
.precio{
    font-size: 1.5rem;
    margin-top: 40px;
    margin-left: 20px;
    text-align: left;

}

.card-producto{
    background: linear-gradient(60deg, var(--color-1), var(--color-1), var(--color-2));
    color: var(--color-5);
    width: 400px; 
    padding: 20px; 
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.card-producto img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px var(--color-3);
}

button{
    font-size: 1.5rem;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    background: linear-gradient(50deg, var(--color-2), var(--color-3));
    border: 2px inset var(--color-6);
    color: var(--color-6);
}
```

* Small: Muestra la imagen al lado del contenido:
```sh
@media screen and (min-width: 576px){
    .card-producto{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 95%;
        text-align: left;
    }

    .card-imagen{
        width: 100%;
    }
    .card-imagen img{
        height: 100%;
        object-fit: cover;

    }

    .card-contenido{
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
```
Con display: grid, convierto a .card-producto en un contenedor de cuadrícula, esto me permite colocar elementos dentro de filas y columnas de manera organizada. Con grid-template-columns, creo dos columnas del mismo tamaño (cada una ocupa el 50% del ancho). Otra cosa a destacar, con object-fit: cover, la imagen se recorta si es necesario, manteniendo su proporción sin deformarse.

* Medium: Aumenta el tamaño de la fuente del título:
```sh
@media screen and (min-width: 768px){
    h2{
        font-size: 2.5rem;
    }
}
```

* Large: Añade una sombra a la tarjeta:
```sh
@media screen and (min-width: 992px){
    .card-producto{
        box-shadow: 20px 20px 10px var(--color-1);
    }
}
```

* Extra-large: Centra la tarjeta en la página:
```sh
@media screen and (min-width: 1200px){
    .card-producto{
        width: 95%;
    }
    button{
        margin-top: 100px;
    }
}

# La tarjeta ya se encuentra centrada desde inicio, acá solamente le doy un poco más de ancho y trato de bajar más el boton que se encuentra dentro de la tarjeta
```

* Extra-extra-large: Añade un borde decorativo a la tarjeta:
```sh
@media screen and (min-width: 1400px){
    h2{
        font-size: 2.8rem;
    }
    .card-producto{
        border: 2px solid var(--color-6);
    }
    
}
```

## Vite Config
Con el archivo vite.config.js, lo que me permite es reconocer los demás archivos html, sin esta configuración, solo estaría procesadno index.html y me ignora los demás archivos.
```sh
import {resolve} from 'path' 
export default{
    css:{
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ejeA: resolve(__dirname, 'src/pages/ejercicio-a/ejercicio-a.html'),
                ejeB: resolve(__dirname, 'src/pages/ejercicio-b/ejercicio-b.html'),
                ejeC: resolve(__dirname, 'src/pages/ejercicio-c/ejercicio-c.html'),
                ejeD: resolve(__dirname, 'src/pages/ejercicio-d/ejercicio-d.html')
            }    
        }
    }
}
```

