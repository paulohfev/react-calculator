import React from 'react';

const Button = ({ value, name, onClick }) => {
  return (
    <button className="button" value={value ? value : ""} onClick={onClick}>
      {value ? value : name}
    </button>
  );
};

export default Button;