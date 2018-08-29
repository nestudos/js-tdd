var expect = require('chai').expect;
var calc = require('../src/main.js');
describe('Calc', function () {

    //Smoke tests
    describe('Smoke tests', function () {
        
        it('deve existir a biblioteca calculadora', function(){
            expect(calc).to.exist;
        });

        it('deve existir o método "soma"', function(){
            expect(calc.soma).to.exist;
            expect(calc.soma).to.be.a.funtion;

        });

        it('deve existir o método "subtracao"', function(){
            expect(calc.subtracao).to.exist;
            expect(calc.subtracao).to.be.a.funtion;

        });

        it('deve existir o método "divisao"', function(){
            expect(calc.divisao).to.exist;
            expect(calc.divisao).to.be.a.funtion;

        });

        it('deve existir o método "multiplicacao"', function(){
            expect(calc.multiplicacao).to.exist;
            expect(calc.multiplicacao).to.be.a.funtion;

        });
    });
});