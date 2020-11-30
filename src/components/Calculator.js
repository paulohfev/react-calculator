import React, { useState } from 'react';
import './Calculator.scss';
import Button from './Button';

const Calculator = () => {
  const initialState = "";
  const [result, setResult] = useState(initialState);
  // console.log(result, "| I was rendered");

  const displayValue = event => {
    setResult(result + event.target.value);
  };

  const removeSingleValue = () => {
    setResult(result.length - 1)
  };

  const calculateValue = () => {
    if (result.length > 0) setResult(eval(result));
  };

  return (
    <div className="calculator">
      <div className="result">
        <h2>{result}</h2>
      </div>

      <div className="keypad">
        <Button name="&#11157;" onClick={() => removeSingleValue} />
        <Button name="Clear" onClick={() => setResult(initialState)} />        
        <Button value="7" onClick={displayValue} />
        <Button value="8" onClick={displayValue} />
        <Button value="9" onClick={displayValue} />
        <Button value="4" onClick={displayValue} />
        <Button value="5" onClick={displayValue} />
        <Button value="6" onClick={displayValue} />
        <Button value="1" onClick={displayValue} />
        <Button value="2" onClick={displayValue} />
        <Button value="3" onClick={displayValue} />
        <Button value="0" onClick={displayValue} />
        <Button value="+" onClick={displayValue} />
        <Button value="-" onClick={displayValue} />
        <Button value="x" onClick={displayValue} />
        <Button value="/" onClick={displayValue} />
        <Button value="=" onClick={calculateValue} />
      </div>
    </div>
  );
};

export default Calculator;