/*
Função (function) é um pequeno trecho de codigo que pode ser invocado no código, simplificando e organizando calculos e etc para reduzir repetições.
Exemplos:

function sayMyName(name) {
    console.log(`Your name is ${name}.`);
}

sayMyName('Bernardo');
sayMyName('Roberto');

function quadrado(valor) {
    return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,20));
-------------------------------------
Organização:
function calcularJuros() {
    
}
function main() {                   Main sempre será o codigo principal, onde coloco valores e juros como nesse Ex.
    console.log('Programa principal.');
}
main();
*/
// Refazendo IMC com funções.
function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal.';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso.';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso.';
    } else {
        return 'Obesidade grave.';
    }
}

(function main() {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();