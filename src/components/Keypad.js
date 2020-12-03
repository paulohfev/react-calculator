import React from 'react';
import Button from './Button';
import './Keypad.scss';

const Keypad = ({ result, setResult }) => {

  const displayValue = event => {
    setResult(prevResult => prevResult + event.target.value);
  };

  const removeSingleValue = () => {
    if (result.length > 0) setResult(prevResult => prevResult.slice(0, -1));
  };

  const calculateValue = () => {
    // eslint-disable-next-line
    if (result.length > 0) setResult(prevResult => eval(prevResult));
  };

  const valueButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '+', '-', '*', '/'];
  const valueButtonsList = valueButtons.map((value) => {
    return <Button key={value} value={value} onClick={displayValue} />
  });

  return (
    <div className="keypad">
      <Button name="&#11157;" onClick={removeSingleValue} />
      <Button name="Clear" onClick={() => setResult("")} />

      {valueButtonsList}

      <Button name="=" onClick={calculateValue} />
    </div>
  );
};

export default Keypad;