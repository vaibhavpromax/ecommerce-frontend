import React, { useState } from "react";
import styles from "./Password.module.scss";
import { ICONS } from "../../icons";
const Password = ({
  value,
  setValue,
  className,
  width = "100%",
  height = "40px",
  placeholder,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={`${styles.password} ${className}`}>
      <label>{label}</label>
      <div className={styles.inputwrapper}>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{ width, height }}
        />

        <div className={styles.eyeicon} onClick={togglePasswordVisibility}>
          {!showPassword ? ICONS.eyeOpen : ICONS.eyeClose}
        </div>
      </div>
    </div>
  );
};

export default Password;
