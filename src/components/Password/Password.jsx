import React, { useState } from 'react';
import styles from './Password.module.scss'; 
const Password = ({ value, setValue, className, width, height, placeholder, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${styles.password} ${className}`}>
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{ width, height }}
        />
        <img style={{width:'60px',height:'60px'}}
          className="eye-icon"
          src={showPassword ? '../../assets/eye-open.png' : '../../assets/eye-close.png'}
          alt={showPassword ? 'Hide Password' : 'Show Password'}
          onClick={togglePasswordVisibility}
        />
      </div>
    </div>
  );
};

export default Password;
