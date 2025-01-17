* Nombre: Matias Casiba 
* Link Repo GitHub: 
* Link Netlify:

# Desafio 12
En este deasio se estará trabajando con responsive;

## Punto A
Diseño de una página web básica, tengo que crear una página simple con un encabezado, un menú de navegación, un contenido principal y un pie de página. Así se verá el archivo index.html:
```sh
<body>
    <header>
      <h1>Mi Página Web</h1>

      <nav>
        <ul>
          <li>Inicio</li>
          <li>Acreca de</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>

    <main>

      <div class="card">
        <h2>Bienvenido a mi sitio web</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div class="card">
        <h3>Sobre mi</h3>
        <p>Aquí puedes conocerme un poco mejor</p>
      </div>

      <div class="card">
        <h3>Mis Proyectos</h3>
        <p>Descubre mis últimos proyectos</p>
      </div>

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