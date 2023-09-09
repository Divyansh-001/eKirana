import React from 'react';

const Arrow = ({ disabled, onClick, children }) => (
  <button
    className={`arrow-button ${disabled ? 'disabled' : ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Arrow;
