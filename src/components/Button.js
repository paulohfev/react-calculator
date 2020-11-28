import React from 'react';

const Button = ({ type, value, name, onClick }) => {
  return (
    <button className={`button ${type}`} value={value ? value : ""} onClick={onClick}>
      {value ? value : name}
    </button>
  );
};

export default Button;