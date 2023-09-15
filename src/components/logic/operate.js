import Big from 'big.js';

export default function operate(value1, value2, operator) {
  const num1 = Big(value1);
  const num2 = Big(value2);

  if (operator === '+') {
    return num1.plus(num2).toString();
  } if (operator === '-') {
    return num1.minus(num2).toString();
  } if (operator === 'x') {
    return num1.times(num2).toString();
  } if (operator === '÷') {
    if (num2.eq(0)) {
      return 'Error: Division by zero';
    }
    return num1.div(num2).toString();
  } if (operator === '%') {
    return (num1 / 100).toString();
  }
  return ('');
}
