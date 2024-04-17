const entradas = [5, 50, 10, 219, 98, 23, 12, 99, 19, 29, 1, 142];
let i = 0;

function gets() {
    const valor = entradas[i];
    i = i + 1;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print}; // Exportando functions "gets e print" para outro arquivo que o chamar.