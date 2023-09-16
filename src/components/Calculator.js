import React, { useState } from 'react';
import './Calculator.css';
import DigitButton from './DigitButton';
import operate from './logic/operate';

const Calculator = () => {
  const [result, setResult] = useState('0');
  const [input, setInput] = useState('');
  const [operator, setOperator] = useState('');

  const handleOperatorClick = (value) => {
    if (operator === '') {
      setInput(result);
      setResult('0');
      setOperator(value);
    } else if (operator !== '=' && result !== '0') {
      const newResult = operate(input, result, operator);
      setInput(newResult);
      setResult('0');
      setOperator(value);
    } else if (operator === '=') {
      setInput(result);
      setResult('0');
      setOperator(value);
    } else if (value === '%') {
      if (result === '0') {
        const percentage = operate(input, '1', operator);
        setInput(input);
        setResult(percentage);
        setOperator(value);
      } else {
        const percentage = operate(result, '100', operator);
        setInput(result);
        setResult(percentage);
        setOperator(value);
      }
    }
  };

  const handleEqualsClick = () => {
    if (input && operator && result) {
      const newResult = operate(input, result, operator);
      setInput('');
      setResult(newResult);
      setOperator('=');
    }
  };

  const handleClearClick = () => {
    setResult('0');
    setInput('');
    setOperator('');
  };

  const handleClick = (value) => {
    if (value === '0' && result === '0') {
      return;
    }
    if (value === '.' && result.indexOf('.') !== -1) {
      return;
    }
    if (operator === '=') {
      setResult(value.toString());
      setOperator('');
    } else if (value === '+/-') {
      // Toggle the sign of the current result without clearing
      const toggledResult = result.charAt(0) === '-' ? result.slice(1) : `-${result}`;
      setResult(toggledResult);
    } else if (result === '0' || /[+x÷-]/.test(result)) {
      setResult(value.toString());
    } else {
      setResult((prevResult) => prevResult + value.toString());
    }
  };

  return (
    <div className="calculator-grid">
      <div className="calculator-output">{result}</div>
      <button type="button" onClick={handleClearClick}>AC</button>
      <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" onClick={() => handleOperatorClick('%')}>%</button>
      <button type="button" className="yellow-btns" onClick={() => handleOperatorClick('÷')}>÷</button>
      <DigitButton onClick={() => handleClick(7)} digit={7} />
      <DigitButton onClick={() => handleClick(8)} digit={8} />
      <DigitButton onClick={() => handleClick(9)} digit={9} />
      <button type="button" className="yellow-btns" onClick={() => handleOperatorClick('x')}>x</button>
      <DigitButton onClick={() => handleClick(4)} digit={4} />
      <DigitButton onClick={() => handleClick(5)} digit={5} />
      <DigitButton onClick={() => handleClick(6)} digit={6} />
      <button type="button" className="yellow-btns" onClick={() => handleOperatorClick('-')}>-</button>
      <DigitButton onClick={() => handleClick(1)} digit={1} />
      <DigitButton onClick={() => handleClick(2)} digit={2} />
      <DigitButton onClick={() => handleClick(3)} digit={3} />
      <button type="button" className="yellow-btns" onClick={() => handleOperatorClick('+')}>+</button>
      <button onClick={() => handleClick(0)} type="button" className="span-tow">0</button>
      <button type="button" onClick={() => handleClick('.')}>.</button>
      <button type="button" className="yellow-btns" onClick={handleEqualsClick}>=</button>
    </div>
  );
};

export default Calculator;
