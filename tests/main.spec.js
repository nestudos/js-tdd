var expect = require('chai').expect;
var calc = require('../src/main.js');
describe('Calc', function () {

    //Smoke tests
    describe('Smoke tests', function () {

        it('deve existir a biblioteca calculadora', function () {
            expect(calc).to.exist;
        });

        it('deve existir o método "soma"', function () {
            expect(calc.soma).to.exist;
            expect(calc.soma).to.be.a.funtion;

        });

        it('deve existir o método "subtracao"', function () {
            expect(calc.subtracao).to.exist;
            expect(calc.subtracao).to.be.a.funtion;

        });

        it('deve existir o método "divisao"', function () {
            expect(calc.divisao).to.exist;
            expect(calc.divisao).to.be.a.funtion;

        });

        it('deve existir o método "multiplicacao"', function () {
            expect(calc.multiplicacao).to.exist;
            expect(calc.multiplicacao).to.be.a.funtion;

        });
    });

    describe('Soma', function () {
        it('deve retornar 4 quando soma(2,2)', function () {
            expect(calc.soma(2,2)).to.be.equal(4);
        });
    });

    describe('Subtracao', function () {
        it('deve retornar 0 quando subtracao(2,2)', function () {
            expect(calc.subtracao(2,2)).to.be.equal(0);
        });

        it('deve retornar -4 quando subtracao(6,10)', function () {
            expect(calc.subtracao(6,10)).to.be.equal(-4);
        });
    });

    describe('Multiplicação', function () {
        it('deve retornar 10 quando multiplicacao(2,5)', function () {
            expect(calc.multiplicacao(2,5)).to.be.equal(10);
        });
    });

    describe('Divisão', function () {
        it('deve retornar 1 quando divisão(2,2)', function () {
            expect(calc.divisao(2,2)).to.be.equal(1);
        });

        it('deve retornar "Não é possível dividir por 0" quando dividir por 0', function () {
            expect(calc.divisao(4,0)).to.be.equal("Não é possível dividir por 0");
        });
    });
});