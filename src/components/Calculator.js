import React from 'react';
import './Calculator.css';
import DigitButton from './DigitButton';

const Calculator = () => (
  <div className="calculator-grid">
    <div className="calculator-output">123</div>
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="yellow-btns">÷</button>
    <DigitButton digit={7} />
    <DigitButton digit={8} />
    <DigitButton digit={9} />
    <button type="button" className="yellow-btns">x</button>
    <DigitButton digit={4} />
    <DigitButton digit={5} />
    <DigitButton digit={6} />
    <button type="button" className="yellow-btns">-</button>
    <DigitButton digit={1} />
    <DigitButton digit={2} />
    <DigitButton digit={3} />
    <button type="button" className="yellow-btns">+</button>
    <button type="button" className="span-tow">0</button>
    <button type="button">.</button>
    <button type="button" className="yellow-btns">=</button>
  </div>
);

export default Calculator;
