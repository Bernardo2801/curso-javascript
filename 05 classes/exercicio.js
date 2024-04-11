/*
    1- Crie uma classe para representar carros.
    Os carros possuem marca, cor e gasto médio de combustível por Kilometro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos
    dê o valor gasto em reais para realizar este percurso.

class Car {

    brand;
    color;
    averageFuel;

    constructor(brand, color, averageFuel) {
        this.brand = brand;
        this.color = color;
        this.averageFuel = averageFuel;
    }

    calcTravel(priceFuel, distanceKm) {
        return (distanceKm * this.averageFuel * priceFuel).toFixed(2);

    }
}

const sentra = new Car('Nissan', 'Prata', 1/12);
console.log(sentra.calcTravel(5.99, 811));

const parati = new Car('Volkswagen', 'Prata', 1/13);
console.log(parati.calcTravel(5.99, 628));
*/

/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma poessoa chamada José que tenha 70kg de peso e 1,75 metros de altura e peça ao José para dizer o valor do seu IMC. 
*/

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calcImc(){
        return (this.weight / (this.height * this.height)).toFixed(2);
    }

    classifyImc() {
        const imc = this.calcImc();
        

        if (imc < 18.5) {
            return 'Abaixo do peso.';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal.';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso.';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso.';
        } else {
            return 'Obesidade grave.';
        }
    }
}

const bernardo = new Person('Bernardo', 75, 1.75);
console.log(bernardo.classifyImc());

const carol = new Person('Carol', 50, 1.60);
console.log(carol.classifyImc());