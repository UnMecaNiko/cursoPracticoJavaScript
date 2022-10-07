
# Manipulación del DOM

Un closure es:
- Una función que puede recibir un dato y lo almacena en su scope
- Retorna una función que ocupa ese dato previamente guardado

NodeJs es el entorno de ejecución de javaScript en el backend

El objetivo de la manipulación del DOM es que nuestro código HTML,  y al mismo tiempo la página, cambie cada vez que el usuario iteractúa con ella.

Los formularios hacer que se recargue la página. El form toma el último botón y lo toma de tipo submit. Los formularios cambían la url de la páagina para enviar información por medio de los query parámetros.

El simbolo de pregunta hace referencia al query param.

Al usar 
```js
 event.preventDefault(); 
```
Se cancela la operación de recargar la página y cambiar la url de la misma.
Otra forma de evitar que el formulario asigne por defecto al ultimo botón la propiedad submit es diretamente.
```js
<button type="button" id="btnCalcular">Calcular</button>
```



# [DESAFÍOS](https://jshero.platzi.com/)

## #1 

Con el bucle for-in, podemos iterar sobre propiedades enumerables. Los enumerables en el arreglo son justamente sus índices. Por ello es 0 1 2 3.

Con un bucle for-of, podemos recorrer iterables. Un arreglo por definición es un iterable, en cada iteración la variable item es igual al elemento sobre el cual se itera en ese momento. Por el    lo es "☕" "💻" "🍷" "🍫".

En la practica los bucles for-of son más usados y ocacionalmente los bucles for-in.

