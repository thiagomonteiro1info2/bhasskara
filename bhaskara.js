function calcularDelta(a, b, c){
    return b*b - 4*a*c
}
function calcularX1(delta, a, b){
    return(-b + Math.sqrt(delta)) / (2*a)
}
function calcularX2(delta, a, b){
    return(-b - Math.sqrt(delta)) / (2*a)
}
function bhaskara (a, b, c){
    const valorDelta = calcularDelta(a, b, c)
    let x1 = 'Inexistente', x2 = 'Inexistente'
    if (valorDelta === 0) {
        x1 = calcularX1(valorDelta, a, b)
        x2 = 'Inexistente'
    }

else if (valorDelta > 0) {
    x1 = calcularX1(valorDelta, a, b)
    x2 = calcularX2(valorDelta, a, b)
}
return{x1: x1, x2: x2}
}

function handlebtnCalcular(){
    const a = parseInt(document.getElementById('valorA').value)
    const b = parseInt(document.getElementById('valorB').value)
    const c = parseInt(document.getElementById('valorC').value)
    const resultado = bhaskara(a, b, c)
    document.getElementById('resultadoX1').innerHTML = 'X1: ' + resultado.x1
    document.getElementById('resultadoX2').innerHTML = 'X2: ' + resultado.x2
}


document.getElementById('btnCalcular').addEventListener('click', handlebtnCalcular)