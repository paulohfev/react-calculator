import React from 'react';
import './ResultScreen.scss';

const ResultScreen = ({ result }) => {
  return (
    <div className="result">
      <h2>{result}</h2>
    </div>
  );
};

export default ResultScreen;