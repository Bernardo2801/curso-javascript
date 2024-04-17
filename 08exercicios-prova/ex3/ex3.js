/*

    3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário a ser transferido é calculado da seguinte maneira:
    
    valor bruto do salário - percentual de impostos mediante a faixa salarial + adicional dos benefícios

    Para calcular o percentual de impostos segue as aliquotas:

        De R$ 0.00 a R$ 1100.00 = 5.00%
        De R$ 1100.01 a R$ 2500.00 = 10.00%
        Maior que R$ 2500.00 = 15.00%

    Exemplo:    Entrada:    Salário bruto: 2000
                            Benefícios:    250
                
                Saída:      2050.00
*/

const { gets, print } = require('./funcoes-aux-ex3');

const salarioBruto = gets(0);
const valorBeneficios = gets(1);

function calcularPorcentagem(valor, percentual) {       // FUNÇÃO PARA CALCULAR PORCENTAGEM
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {      // FUNÇÃO PARA CALCULAR QUAL VAI SER O DESCONTO C BASE NO SALARIO

    if(salario >= 0 && salario < 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotasImposto = pegarAliquota(salarioBruto)
const valorImposto = calcularPorcentagem(salarioBruto, aliquotasImposto)

const valorTransferencia = (salarioBruto - valorImposto) + valorBeneficios;

print(valorTransferencia);