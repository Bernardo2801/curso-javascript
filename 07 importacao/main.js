const { gets, print } = require('./funcoes-auxiliares');  // importando functions do outro arquivo


/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100. Faça um programa que receba
    os  números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }

}
print(maiorValorEncontrado);