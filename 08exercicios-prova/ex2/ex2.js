/*

    2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
    Imprima o maior número par e o menor número ímpar.

    Ex:
        Entradas:           Saida:
            5                  Maior número par: 10
            3                  Menor número ímpar: 1
            4
            1
            10
            8
*/

const { gets, print } = require('./funcoes-aux-ex2');

const n = gets();   // N é o número de elementos que eu recebi.
let maiorNumeroPar = null;  // Não temos um valor, então colocar "null"
let menorNumeroImpar = null;    // Não temos um valor, então colocar "null"

for (let i = 0; i < n; i++) { // O "for" serve para percorrer "N" vezes o código, neste caso o N foi definido acima.

    const numero = gets();  // Aqui eu defini como número as entradas (5, 3, 4, 1, 10, 8).

    if (numero % 2 === 0) { // Aqui estou definindo que "número" é par.
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {  // Na primeira vez por n ter nenhum número
            maiorNumeroPar = numero;                               // vai atribuir o numero ao maior, e na segunda,
        }                                                          // ele vai pegar o numero e conferir qual o maior
    } else {                                                       // e vai salvar em maiorNumeroPar.
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}
print(`O maior número par dessa lista de entradas é: ${maiorNumeroPar}.`)
print(`O menor número ímpar dessa lista de entradas é: ${menorNumeroImpar}.`)