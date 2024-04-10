/*
Objeto, invés de definir uma variavel para nome e idade sozinhas, criar um objeto que englobe essas variavés e usar elas quando necessario, exemplo:
*/
const person = {
    name: 'Bernardo Araújo Alves',
    age: 20,
    descrever: function() {
        console.log(`Meu nome é ${this.name} e tem ${this.age} anos.`); //posso puxar atributos com o method THIS
    }
};

person.name = 'Carol'; // Acesso direto
person.descrever();

person['name'] = 'Fernando'; // Acesso dinâmico.
person['age'] = 43;
person.descrever();

// E quando quiser, também posso acessar diretamente o campo que eu quiser:

console.log(person['age']);
