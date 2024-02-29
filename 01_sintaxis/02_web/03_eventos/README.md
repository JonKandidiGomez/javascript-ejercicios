# Eventos

## 1

Crea una página HTML con el siguiente contenido:

```html

<fieldset id="contents">
    <legend>Contenido</legend>
    <p>
        Puedes leer la <a href="https://wikipedia.org">Wikipedia</a> o
        visitar <a href="https://w3.org"><i>W3.org</i></a> para aprender más
        sobre el desarrollo de aplicaciones web.
    </p>
</fieldset>
```

Captura los eventos de click en los enlaces, detén la navegación y muestra un `alert()` con la dirección de la URL.

## 2

¿Recuerdas el ejercicio de la lista de tareas?

1. Añádele un formulario para recoger los valores de una nueva tarea y que la añada al final de la tabla al clickar en
   un botón de envío.
2. Mejora la aplicación añadiendo un enlace o botón de borrado a cada una de las tareas.
3. Sigue mejorando la aplicación y añade la posibilidad de marcar una tarea como resuelta (es
   suficiente con añadir un botón y que el texto se muestre tachado cuando esté resuelta).

## 3

Partiendo del código disponible en [este CodePen](https://codepen.io/jonvadillo/pen/xxwXNRR) implementa el código
JavaScript necesario para que la galería de imágenes muestre la imágen seleccionada en cada momento y evite la
navegación de los enlaces.

## 4

Mejora el ejercicio anterior para que genera la galería de imágenes partiendo de una lista de objetos como la siguiente:

```javascript
const urls = [{
    id: 1,
    url: "https://picsum.photos/id/1015/550/400"
}, {
    id: 2,
    url: "https://picsum.photos/id/1018/550/400"
}];
```
