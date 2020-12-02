import React, { useState } from 'react';
import './Calculator.scss';
import ResultScreen from './ResultScreen';
import Keypad from './Keypad';

const Calculator = () => {
  const [result, setResult] = useState("");
  // console.log(result, "| I was rendered");

  return (
    <div className="calculator">
      <ResultScreen result={result} />

      <Keypad result={result} setResult={setResult} />
    </div>
  );
};

export default Calculator;