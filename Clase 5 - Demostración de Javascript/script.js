
// const botonSuma = document.getElementById("boton-sumar")
const botonSuma = document.querySelector("#boton-sumar")

botonSuma.addEventListener('click', function(e) {
    
    const input1 = document.getElementById("input-numero1")
    const input2 = document.getElementById("input-numero2")

    if (input1.value === "" || input2.value === "") {
        alert("Debe completar ambos inputs")
        return
    }

    const resultadoSuma = parseFloat(input1.value) + parseFloat(input2.value)
    alert("El resultado es: " + resultadoSuma)
})