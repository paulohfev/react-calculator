import React, { useState } from 'react';
import './Calculator.scss';
import Button from './Button';
import ResultScreen from './ResultScreen';

const Calculator = () => {
  const initialState = "";
  const [result, setResult] = useState(initialState);
  // console.log(result, "| I was rendered");

  const displayValue = event => {
    setResult(prevResult => prevResult + event.target.value);
  };

  const removeSingleValue = () => {
    if (result.length > 0) setResult(prevResult => prevResult.slice(0, -1));
  };

  const calculateValue = () => {
    if (result.length > 0) setResult(prevResult => eval(prevResult));
  };

  return (
    <div className="calculator">
      <ResultScreen result={result} />

      <div className="keypad">
        <Button name="&#11157;" onClick={removeSingleValue} />
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