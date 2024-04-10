/*
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- Debito, recebe 10% de desconto;
- À vista (dinheiro ou pix), recebe 15% de desconto;
- Em duas vezes, preço normal.
- Acima de duas vezes, preço com juros de 10% do valor;
*/

const precoEtiqueta = 100;
const formaDePagamento = 40;

if (formaDePagamento === 1) {
    const calcDebito = precoEtiqueta - (precoEtiqueta * 0.10);
    const valorDebito = calcDebito.toFixed(2);
    console.log(`Por pagar no débito, ganhou 10% de desconto. Valor atualizado: R$${valorDebito}`);
} else if (formaDePagamento === 2) {
    const calcDinheiroPix = precoEtiqueta - (precoEtiqueta * 0.15);
    const valorDinheiroPix = calcDinheiroPix.toFixed(2);
    console.log(`Por pagar no Dinheiro ou Pix, ganhou 15% de desconto. Valor atualizado: R$${valorDinheiroPix}`);
} else if (formaDePagamento === 3) {
    console.log(`Por pagar em 2x, seu preço segue o mesmo. R$${precoEtiqueta}`);
} else if (formaDePagamento === 4){
    const calcDuasVezesMais = precoEtiqueta + (precoEtiqueta * 0.10);
    const valorDuasVezesMais = calcDuasVezesMais.toFixed(2);
    console.log(`Por pagar em mais de 2x, possui um acréscimo de 15%. Valor atualizado: R$${valorDuasVezesMais}`);
} else {
    console.log('Forma de pagamento não reconhecida.')
}