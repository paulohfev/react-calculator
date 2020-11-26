import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
  const [result, setResult] = useState([0]);

  return (
    <div className="calculator">
      <div className="result">
        <h2>{result}</h2>
      </div>

      <div className="buttons">
        <button className="button number" onClick={() => setResult(1)}>1</button>
        <button className="button number" onClick={() => setResult(2)}>2</button>
        <button className="button number">3</button>
        <button className="button number">4</button>
        <button className="button number">5</button>
        <button className="button number">6</button>
        <button className="button number">7</button>
        <button className="button number">8</button>
        <button className="button number">9</button>
        <button className="button clear" onClick={() => setResult(0)}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;