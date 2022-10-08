# Curso Práctico de JavaScript
En este curso aprenderás cómo usar JavaScript para resolver problemas reales y pondrás en práctica todos tus conocimientos de JavaScript junto a tu profesor @juandc.

Lo que aprenderemos:

-Despliega tus proyectos a internet con GitHub Pages.
-Desarrolla software con un flujo de trabajo profesional.
-Conecta JavaScript con HTML.
-Pon a prueba tus conocimientos de JavaScript.

Para empezar hicimos un [Test incial](./respuestas.md) donde repasamos todos los conceptos básicos y vamos más allá con actividades bonus.

Lo que verás a continuación son mis apuntes del curso:

# Manipulación del DOM

> The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.


Un closure es:
- Una función que puede recibir un dato y lo almacena en su scope
- Retorna una función que ocupa ese dato previamente guardado

NodeJs es el entorno de ejecución de javaScript en el backend

El objetivo de la manipulación del DOM es que nuestro código HTML,  y al mismo tiempo la página, cambie cada vez que el usuario iteractúa con ella.

Los formularios hacer que se recargue la página. El form toma el último botón y lo toma de tipo submit. Los formularios cambían la url de la páagina para enviar información por medio de los query parámetros.

El simbolo de pregunta hace referencia al query param.

Al usar `event.preventDefault();` se cancela la operación de recargar la página y cambiar la url de la misma.
Otra forma de evitar que el formulario asigne por defecto al ultimo botón la propiedad submit es diretamente.
```js
<button type="button" id="btnCalcular">Calcular</button>
```

# Contribución a proyectos

Para gitignore, se hace primero add el archivo y luego se verifica en gitstatus que se haga seguimiento únicamente a lo necesario.

Se recomienda trabajar con la rama main como deafult en github.

Las buenas prácticas son relativas y no absolutas.

Para abrir un respositorio en VScode se puede usar el comando `code ./ -r` 

Antes de hacer una contribución hay que enternder cómo está el código, luego identificar las posibles mejoras, entender las historia, el equipo, y luego de un buen análisis poder hacer contribuciones.

La mayoría de tiempo estaremos leyendo código.

>Las otras notas pueden estar en el repo ['curso-frontend-dev-practico-JS
'](https://github.com/UnMecaNiko/curso-frontend-dev-practico-JS)

Para hacer desaparecer o aparcer un menú en una página una técnica puede ser crear una clase que se asigne o quite cada vez que se pulse el botón deseado:
```js
//css
.inactive{
        display: none;
      }
//JS
menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
```



# [DESAFÍOS](https://jshero.platzi.com/)

## #1 

Con el bucle for-in, podemos iterar sobre propiedades enumerables. Los enumerables en el arreglo son justamente sus índices. Por ello es 0 1 2 3.

Con un bucle for-of, podemos recorrer iterables. Un arreglo por definición es un iterable, en cada iteración la variable item es igual al elemento sobre el cual se itera en ese momento. Por el    lo es "☕" "💻" "🍷" "🍫".

En la practica los bucles for-of son más usados y ocacionalmente los bucles for-in.

# Fuentes de información

[Basic Formatting sintax - GitHub](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[gitgnore.io](https://www.toptal.com/developers/gitignore)
