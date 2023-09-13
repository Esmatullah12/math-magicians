import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator-grid">
    <div className="calculator-output">123</div>
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="yellow-btns">/</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button" className="yellow-btns">x</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button" className="yellow-btns">-</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button" className="yellow-btns">+</button>
    <button type="button" className="span-tow">0</button>
    <button type="button">.</button>
    <button type="button" className="yellow-btns">=</button>
  </div>
);

export default Calculator;
