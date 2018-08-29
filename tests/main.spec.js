import { expect } from 'chai';
import {soma, divisao, multiplicacao, subtracao} from '../src/main';

describe('Calc', () => {

    //Smoke tests
    describe('Smoke tests', () => {

        it('deve existir o método "soma"', () => {
            expect(soma).to.exist;
            expect(soma).to.be.a.funtion;

        });

        it('deve existir o método "subtracao"', () => {
            expect(subtracao).to.exist;
            expect(subtracao).to.be.a.funtion;

        });

        it('deve existir o método "divisao"', () => {
            expect(divisao).to.exist;
            expect(divisao).to.be.a.funtion;

        });

        it('deve existir o método "multiplicacao"', () => {
            expect(multiplicacao).to.exist;
            expect(multiplicacao).to.be.a.funtion;

        });
    });

    describe('Soma', () => {
        it('deve retornar 4 quando soma(2,2)', () => {
            expect(soma(2, 2)).to.be.equal(4);
        });
    });

    describe('Subtracao', () => {
        it('deve retornar 0 quando subtracao(2,2)', () => {
            expect(subtracao(2, 2)).to.be.equal(0);
        });

        it('deve retornar -4 quando subtracao(6,10)', () => {
            expect(subtracao(6, 10)).to.be.equal(-4);
        });
    });

    describe('Multiplicação', () => {
        it('deve retornar 10 quando multiplicacao(2,5)', () => {
            expect(multiplicacao(2, 5)).to.be.equal(10);
        });
    });

    describe('Divisão', () => {
        it('deve retornar 1 quando divisão(2,2)', () => {
            expect(divisao(2, 2)).to.be.equal(1);
        });

        it('deve retornar "Não é possível dividir por 0" quando dividir por 0', () => {
            expect(divisao(4, 0)).to.be.equal("Não é possível dividir por 0");
        });
    });
});