/*
Conceito de Boolean - verdadeiro e falso (true or false)

true = 1
false = 0
------------------------
Conditions condições aplicadas no código

numero 1 < numero2;
------------------------
Exemplo com resto de divisão:

const number = 11;
const isNumberPar =  (number % 2) === 0;
console.log(isNumberPar);
------------------------
Igualdade
= neste caso a variavel number recebe 10 (atribuição)
== com 2 igualdades, ele compara tanto se for string ou number, ignorando o tipo
=== ele só aceita se for identica, lendo também os tipos, string etc.
------------------------
Estruturas condicionais com if e else e elseif

const number = 2;
const isNumberPar =  (number % 2) === 0;

if (number === 0) {
    console.log('Esse número é inválido.');
} else if (isNumberPar) {
    console.log('O número é par.')
} else {
    console.log('Esse número é ímpar.');
}
*/