console.log('Hello, world!')

const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')




form.addEventListener('submit', sumarInputValues)
// form,addEventListener('mouseover',alerta)

// function alerta(){

//     alert("por favor limpiar su dispositivo")
// }

function sumarInputValues(event) {
    console.log(event);
    event.preventDefault();
    const concatenacion = input1.value + input2.value
    pResult.innerText = "Resultado: " +  concatenacion
}

