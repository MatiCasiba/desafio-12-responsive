* Nombre: Matias Casiba 
* Link Repo GitHub: https://github.com/MatiCasiba/desafio-12-responsive
* Link Netlify:

# Desafio 12
En este deasio se estará trabajando con responsive;

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
    <script type="module" src="/src/main.js"></script>
</body>
```
### Variables de colores
Usaré un :root paa crear varibales de colores, asi luego asignarlos en clases o elementos con un var():
```sh
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
