const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const divisao = (num1, num2) => (num2 === 0 ? 'Não é possível dividir por 0' : num1 / num2);
const multiplicacao = (num1, num2) => num1 * num2;

export {
  soma, subtracao, divisao, multiplicacao,
};
