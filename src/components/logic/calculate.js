import Big from 'big.js';
import operate from './operate';

export default function calculate(previousValue, currentValue, operation) {
  if (operation === 'AC') {
    // Clear everything
    return '0';
  } if (operation === '+/-') {
    // Negate the current value
    return Big(currentValue).times(-1).toString();
  } if (operation === '%') {
    // Calculate percentage of the current value
    return Big(currentValue).div(100).toString();
  } if (operation === '=') {
    // Calculate the result
    return operate(previousValue, currentValue, '=');
  }
  // Handle numeric input and operators (+, -, x, ÷)
  if (previousValue && operation && currentValue) {
    // Calculate intermediate result
    return operate(previousValue, currentValue, operation);
  }
  // No operation to perform yet, return the current value
  return currentValue;
}
