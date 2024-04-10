/* Neste exemplo o obj pessoa é definido como bernardoaraujoalves porem e se eu quiser criar mais de uma pessoa?
por isso existe as classes.
const person = {
    name: 'Bernardo Araújo Alves',
    age: 20,
    descrever: function() {
        console.log(`Meu nome é ${this.name} e tem ${this.age} anos.`);
    }
};
*/

// **OBS: CLASSE É A DEFINIÇÃO E INSTÂNCIA É A OCORRENCIA, neste exemplo "bernardo/28"

class Person {

    name;                                        // DEFINIÇÃOOOOOOOOOOOOO
    age;
    anoDeNascimento;

    constructor(name, age) { //Os constructors são métodos especiais dentro de uma classe que são chamados automaticamente quando uma nova instância da classe é criada. Eles são usados para inicializar os objetos com valores específicos.
        this.name = name;
        this.age = age;
        this.anoDeNascimento = 2024 - age;
    }

    description() {         // quando for declarar um método dentro das classes, nao precisa utilizar o "function" 
        console.log(`Seu nome é ${this.name} e você tem ${this.age} anos.`);
    }
}

const bernardo = new Person('Bernardo', 20);                           // INSTÂNCIASSSSSSSSS

console.log(bernardo);