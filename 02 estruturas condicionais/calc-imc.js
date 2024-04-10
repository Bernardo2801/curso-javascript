/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:

IMC = peso / (altura * altura);

Elabore um algoritimo que dado o peso e a altua de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condições:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;
*/

const peso = 95;
const altura = 1.75;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Abaixo do peso.')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal.')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso.')
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso.')
} else {
    console.log('Obesidade grave.')
}