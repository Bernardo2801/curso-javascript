/*
Faça um algorítimo que dado as  notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação conforme a tabela abaixo:

Media = (nota1 + nota2 + nota3) /3;

Classificação:

- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média maior que 7, aprovado;
*/

const nota1 = 6.9;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado :(');
} else if (media >=5 && media < 7){
    console.log('Recuperação :/');
} else {
    console.log('Aprovado :)');
}