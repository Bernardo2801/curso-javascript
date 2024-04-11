/* lista é composta por [], o primeiro item equivale a 0 = joao 1 = vitor...

const alunos = ['Carol', 'Fernando', 'Ferreira'];

alunos.push('Arthur');   // assim você "empura" um novo indice ao array;
                        // ou                   Caso de push ou [4], voce vai por de cima por ordem.
alunos[4] = 'Bernardo'; // desta forma, mesmo resultado.

console.log(alunos);
*/

const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length ; i++) {
    const nota = notas[i];
       soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);