import React, { useState } from 'react';
import './Calculator.scss';
import Button from './components/Button';

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
        <div className="button-group-top">
          <Button type="small" name="->" onClick={() => removeSingleValue} />
          <Button type="small" name="Clear" onClick={() => setResult(initialState)} />
        </div>

        <div className="button-group-middle">
          <Button type="small" value="7" onClick={displayValue} />
          <Button type="small" value="8" onClick={displayValue} />
          <Button type="small" value="9" onClick={displayValue} />
          <Button type="small" value="4" onClick={displayValue} />
          <Button type="small" value="5" onClick={displayValue} />
          <Button type="small" value="6" onClick={displayValue} />
          <Button type="small" value="1" onClick={displayValue} />
          <Button type="small" value="2" onClick={displayValue} />
          <Button type="small" value="3" onClick={displayValue} />
          <Button type="large" value="0" onClick={displayValue} />
        </div>

        <Button type="small" value="+" onClick={displayValue} />
        <Button type="small" value="-" onClick={displayValue} />
        <Button type="small" value="*" onClick={displayValue} />
        <Button type="small" value="/" onClick={displayValue} />
        <Button type="small" value="=" onClick={calculateValue} />
      </div>
    </div>
  );
};

export default Calculator;