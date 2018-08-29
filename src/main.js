module.exports = {
  soma(num1, num2) {
    return num1 + num2;
  },

  subtracao(num1, num2) {
    return num1 - num2;
  },

  divisao(num1, num2) {

    return num2 === 0 ? "Não é possível dividir por 0" : num1 / num2;

  },

  multiplicacao(num1, num2) {
    return num1 * num2;
  },
};
