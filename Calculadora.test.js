const Calculadora = require("./Calculadora");

describe("Calculadora", () => {
    it("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
        expect(calculadora.resultado).toBe(0);
    });

    it("obtém resultado", () => {
        const calculadora = new Calculadora();

        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe('number');
    });

    it('Atribui um novo valor à calculadora', () => {
        const calculadora = new Calculadora();
        expect(() => calculadora.resultado = "texto").toThrow(TypeError);
        expect(() => calculadora.resultado = "texto")
            .toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(0);
        expect(() => calculadora.resultado = "5").not.toThrow(TypeError);
        expect(calculadora.resultado).toBe(5);
    });

    it('Operação de soma', () => {
        const calculadora = new Calculadora();
        expect(calculadora.soma).toBeDefined();
        expect(calculadora.soma.length).toBe(1);
        expect(() => calculadora.soma("Texto")).toThrow(TypeError);
        expect(() => calculadora.soma(true)).toThrow("O argumento deve ser um número válido");
        expect(() => calculadora.soma("5")).not.toThrow(TypeError);
        expect(calculadora.resultado).toBe(5);
    });

    it('Operação de divisão', () => {
        const calculadora = new Calculadora();
        expect(calculadora.divisao).toBeDefined();
        expect(calculadora.divisao.length).toBe(1);
        expect(() => calculadora.divisao("Texto")).toThrow(TypeError);
        expect(() => calculadora.divisao(true)).toThrow("O argumento deve ser um número válido");
        expect(() => calculadora.divisao("5")).not.toThrow(TypeError);
        expect(() => calculadora.divisao(0)).toThrow(Error);
        expect(() => calculadora.divisao(0)).toThrow("Divisão ilegal por zero");
        
        calculadora.resultado = 15;
        expect(() => calculadora.divisao(3)).not.toThrow();
        expect(calculadora.resultado).toBe(5); // Verifica a divisão 15 / 3 = 5
    });
});
