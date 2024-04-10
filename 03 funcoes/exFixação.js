/*Fazer uma função para escrever meu nome na saida.

function sayMyName(name) {

    console.log(`Seu nome é: ${name}`);

}

sayMyName('Bernardo');

------------------------------

Fazer uma função para verificar se é maior ou menor de idade.

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }
}

verificarIdade(17);

------------------------------

Invocando uma função dentro da outra (name and age):

function nameAndAge(name, age) {

    if (age >= 18) {
        console.log(`Seu nome é ${name} e você é maior de idade.`);
    } else {
        console.log(`Seu nome é ${name} e você é menor de idade.`);
    }
}
nameAndAge('Bernardo', 18);
*/

// Function para calcular preço:

function aplicarDesconto(precoEtiqueta, desconto) {
    return precoEtiqueta - (precoEtiqueta * (desconto / 100));
}

function aplicarJuros(precoEtiqueta, juros) {
    return precoEtiqueta + (precoEtiqueta * (juros / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(`Por pagar no débito, ganhou 10% de desconto. Valor atualizado: R$${aplicarDesconto(precoEtiqueta, 10)}`);

} else if (formaDePagamento === 2) {
    console.log(`Por pagar no Dinheiro ou Pix, ganhou 15% de desconto. Valor atualizado: R$${aplicarDesconto(precoEtiqueta, 15)}`);
} else if (formaDePagamento === 3) {
    console.log(`Por pagar em 2x, seu preço segue o mesmo. R$${precoEtiqueta}`);
} else if (formaDePagamento === 4){
    console.log(`Por pagar em mais de 2x, possui um acréscimo de 15%. Valor atualizado: R$${aplicarJuros(precoEtiqueta, 10)}`);
} else {
    console.log('Forma de pagamento não reconhecida.')
}