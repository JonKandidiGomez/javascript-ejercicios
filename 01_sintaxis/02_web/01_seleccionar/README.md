# Seleccionar elementos del DOM

## 1

Dado este fragmento de HTML:

```html
<h1 id="titular">Lorem ipsum dolor sit amet </h1>
<p>Sed justo <span class="importante">mauris</span>, luctus id lorem at, egestas condimentum leo. Nam in diam id felis
    lacinia <span class="titular">posuere</span> non eu enim. Donec pulvinar neque convallis.</p>
<p>Neque <span class="importante">congue</span> iaculis. Nam vel sem sit amet ligula </a>mollis semper id eu mauris. Nam
    gravida ultrices nisi non porttitor. Vestibulum a <span class="importante">vehicula</span> risus. Nunc ut imperdiet
    mauris.</p>
```

1. Selecciona el elemento con id `titular` y muestra su contenido en la consola mediante la propiedad `textContent`.
2. Selecciona todos los elementos con clase `importante` y muestra su contenido por la consola.

## 2

Crea una página HTML con el siguiente contenido y selecciona todos los enlaces:

```html
<h1>Lorem ipsum dolor sit amet </h1>
<p>consectetur adipiscing elit. Duis purus tellus, condimentum ut <a href="https://egibide.org/">euismod</a> eu,
    tristique at odio. </p>
<p>Sed justo mauris, luctus id lorem at, egestas condimentum leo. Nam in diam id felis lacinia <a
        href="https://egibide.org/">posuere non eu</a> enim. Donec pulvinar neque convallis. </p>
<p>neque congue iaculis. Nam vel sem sit <a href="https://egibide.org/">amet ligula </a>mollis semper id eu mauris. Nam
    gravida ultrices nisi non porttitor. Vestibulum a vehicula risus. Nunc ut imperdiet mauris. </p>
```

Muestra en la consola el número de elementos seleccionados.
