/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:

    - Preço do combustível;
    - Gasto médio de combustivel do carro por KM;
    - Distância em KM da viagem;

    Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoCombustivel = 5.99;
const consumoMedio = 14;
const distanciaKm = 811;

const gastoTotal = (distanciaKm/consumoMedio) * precoCombustivel;

console.log(gastoTotal);