const Calculadora = require("./Calculadora");

describe("Calculadora", () => {

    it("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
        expect(calculadora.resultado).toBe(0);
    });
    
    it("obtem resultado", () =>{
        const calculadora = new Calculadora();
        
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe('number');
    })
    
    it('Atribui um novo valor á calculadora', () => {
    const calculadora = new Calculadora();
    expect(() => calculadora.resultado = "Texto").toThrow(TypeError);
    expect(() => calculadora.resultado = "Texto")
        .toThrow("O argumento deve ser um número válido");
    expect(calculadora.resultado).toBe(0);
    expect(() => calculadora.resultado = "5").not.toThrow(TypeError);
    expect(calculadora.resultado).toBe(5); 
    })
    
})
