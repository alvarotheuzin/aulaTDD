class Calculadora {
    #resultado;

    constructor() {
        this.#resultado = 0;
    }

    get resultado() {
        return this.#resultado;
    }

    set resultado(numero) {
        if (typeof numero == 'string') {
            numero = numero - 0;
        }
        if (isNaN(numero) || typeof numero !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado = numero;
    }

    soma(numero) {
        if (typeof numero == 'string') {
            numero = numero - 0;
        }
        if (isNaN(numero) || typeof numero !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado += numero;
    }

    divisao(numero) {
        if (typeof numero == 'string') {
            numero = numero - 0;
        }
        if (isNaN(numero) || typeof numero !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        if (numero === 0) {
            throw new Error("Divisão ilegal por zero");
        }
        this.#resultado /= numero;
    }
}

module.exports = Calculadora;
