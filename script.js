console.log('Hello, world!')

// se crean variables que representen los selectores
// hay que oservar bien el html
// selectores: h1 {color: red} 

//querySelector se trata como notación css
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})
//modifiar el html dentro de javaScript
h1.innerHTML = "cambiamos el titulo <br> y etiquetas"
h1.innerText = "cambiar titulo sin etiquetas"

console.log(h1.getAttribute('class'))

h1.setAttribute('class',"rojo")
h1.classList.add('morado')
//agregar o quitar una clase según el caso
// h1.classList.toggle('morado')
// h1.classList.contains('morado')

input.value = "escrito desde js"

const img =document.createElement('img')
img.setAttribute('src', 
    'https://yt3.ggpht.com/OjYO3SFag_M43EgQrTQ9b1an9cHbAHfXqbgAYTN7U69gC8UFMQtrht0Iv9CzY8_g8lgmyGDa8X8=s900-c-k-c0x00ffffff-no-rj')

    
pid.innerHTML = ""
pid.append(img)