class Person {

    name;
    age;
    anoDeNascimento;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.anoDeNascimento = 2024 - age;
    }

    description() {
        console.log(`Seu nome é ${this.name} e você tem ${this.age} anos.`);
    }
}

function compararPessoas(p1, p2) {  // Funções recebendo objetos.
    if (p1.age > p2.age) {
        console.log(`${p1.name} é mais velha que ${p2.name}.`);
    } else if (p2.age > p1.age) {
        console.log(`${p2.name} é mais velha que ${p1.name}.`);
    } else {
        console.log(`${p1.name} e ${p2.name} tem a mesma idade.`);
    }
}

const bernardo = new Person('Bernardo', 20);
const carol = new Person('Carol', 21);

compararPessoas(bernardo, carol);