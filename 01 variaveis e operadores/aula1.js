/*
Como declarar variáveis:

Pode ser usado CONST e LET

Const para variáveis que só podem receber 1 valor;
Let para variáveis que podem ser reescritas.

let preco = 10;
let taxa = 2.50;
console.log(preco);

let calc = preco + taxa;

preco = calc;
console.log(preco);

Já com o const, n funcionaria, pois uma variável só pode receber 1 valor.
(TypeError: Assignment to constant variable.)

const preco = 10;
const taxa = 2.50;
console.log(preco);

const calc = preco + taxa;

const precoAtualizado = calc;       Ao mudar o nome da variável ele já consegue resolver o problema.
console.log(precoAtualizado);
*/

/*

Tipos de operadores

Igual na matemática: + - * /

*/