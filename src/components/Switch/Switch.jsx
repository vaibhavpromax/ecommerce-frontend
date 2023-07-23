import React from 'react';
import './Switch.scss';

const Switch = ({ name, checked, onChange, disabled, onClick }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        onClick={onClick}
      />
      <span className="checkmark"></span>
    </label>
  );
};

Switch.defaultProps = {
  disabled: false
};

export default Switch;
