/*
    1- Crie um programa que dado um número imprima a sua tábuada.

const numero = 7;

for (let i = 1; i <= 10; i++) {

    console.log(i * numero);
}
------------------------------------------
    2- Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número PAR encontrado.
*/
const numbers = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numbers.length; i++) {

    const number = numbers[i];

    if(number % 2 === 0) {
        console.log(number);
    } else {
        console.log(number);
    }

}