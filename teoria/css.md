# CSS significa Cascading Style Sheets

# Propiedades basicas

height: altura.
width: anchura.
margin: separacion alrededor del elemento que contiene el margin de otro elemento sin que este se modifique.
padding: separacion interna del elemento que contiene el padding, hace que agrande su tamaño, y que los hijos de el elemento padre se separen de sus bordes.
border: borde alrededor de un elemento.
background-color: define un color de fondo.
color: define un color al elemento.
border-radius: redondea los bordes de un elemento.

# Selectores recomendados o mas usados (clase 6)

* {
    Selector universal, de menor jerarquia (buena practica).
}

body {
    Selector de elemento, jerarquia mayor a la universal (buena practica).
}

.header {
    Selector de clases, jerarquia mayor a la universal y al de elementos (buena practica, son los mas recomendables).
}

#navigation-bar {
    Selector de ids, jerarquia mayor a la universal, al de elementos y al de clases (casos muy especificos).
}

# flexbox (clase 8)

.padre {
    display: flex; 
    justify-content: Alinea el eje horizontal, varia segun el flex-direction.
    align-items:  Alinea el eje vertical, varia segun el flex-direction.
    gap: Distanciacion entre elementos contenidos por el padre

    flex-direction: Puede cambiar la direccion del flexbox, hace que cambie el justify-content y el align-items.
}

# Normalize 

* {
    box-sizing: border-box;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}

# Variables (clase 9)

**Declaracion**

:root {
    --color-texto: #3a3b3c;
}

**Llamado**

color: var(--color-texto);

# Media Queries (clase 10)

Es un metodo para que la pagina sea responsive, 

@media screen and (min-width: 830px) {
    cambios 
}

En este caso, se especifica que la media query se aplica a dispositivos con pantallas, y que cuando se supere un minimo de ancho de la pantalla pase lo que esta abajo.