import React, { useState } from 'react';
import './Calculator.scss';
import Button from './components/Button';

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
        <Button type="number" value="1" onClick={onButtonClick} />
        <Button type="number" value="2" onClick={onButtonClick} />
        <Button type="number" value="3" onClick={onButtonClick} />
        <Button type="number" value="4" onClick={onButtonClick} />
        <Button type="number" value="5" onClick={onButtonClick} />
        <Button type="number" value="6" onClick={onButtonClick} />
        <Button type="number" value="7" onClick={onButtonClick} />
        <Button type="number" value="8" onClick={onButtonClick} />
        <Button type="number" value="9" onClick={onButtonClick} />
        <Button type="number" value="+" onClick={onButtonClick} />
        <Button type="number" value="-" onClick={onButtonClick} />
        <Button type="number" value="*" onClick={onButtonClick} />
        <Button type="number" value="/" onClick={onButtonClick} />
        <Button type="equals" value="=" onClick={calculate} />
        <Button type="clear" name="Clear" onClick={() => setResult("")} />
      </div>
    </div>
  );
};

export default Calculator;