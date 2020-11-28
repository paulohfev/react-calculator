import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
  const [result, setResult] = useState("");
  // console.log(result, "| I was rendered");

  const onButtonClick = event => {
    setResult(result + event.target.value);
  };

  const calculate = () => {
    setResult(eval(result));
  };

  return (
    <div className="calculator">
      <div className="result">
        <h2>{result}</h2>
      </div>

      <div className="buttons">
        <button className="button number" value="1" onClick={onButtonClick}>1</button>
        <button className="button number" value="2" onClick={onButtonClick}>2</button>
        <button className="button number" value="3" onClick={onButtonClick}>3</button>
        <button className="button number" value="4" onClick={onButtonClick}>4</button>
        <button className="button number" value="5" onClick={onButtonClick}>5</button>
        <button className="button number" value="6" onClick={onButtonClick}>6</button>
        <button className="button number" value="7" onClick={onButtonClick}>7</button>
        <button className="button number" value="8" onClick={onButtonClick}>8</button>
        <button className="button number" value="9" onClick={onButtonClick}>9</button>
        <button className="button operator" value="+" onClick={onButtonClick}>+</button>
        <button className="button operator" value="-" onClick={onButtonClick}>-</button>
        <button className="button operator" value="*" onClick={onButtonClick}>*</button>
        <button className="button operator" value="/" onClick={onButtonClick}>/</button>
        <button className="button equals" value="=" onClick={calculate}>=</button>
        <button className="button clear" onClick={() => setResult("")}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;