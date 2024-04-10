/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:

    - Preço do etanol;
    - Preço da gasolina;
    - O tipo de combustível que está no seu carro;
    - Gasto médio de combustível do carro por KM;
    - Distância em KM da viagem:

    Imprima no console o valor que será gasto para realizar esta viagem.

const etanol = 5;
const gasolina = 5.99;
const consumoMedio = 14;
const distanciaKm = 811;
const tipoCombustível = 'Gasolina';

if (tipoCombustível === 'Gasolina') {
    const precoGasolina = (distanciaKm/consumoMedio) * gasolina;
    console.log(`Você gastará um total de R$${precoGasolina.toFixed(2)}`);
} else {
    const precoEtanol = (distanciaKm/consumoMedio) * etanol;
    console.log(`Você gastará um total de R$${precoEtanol.toFixed(2)}`);

}
*/