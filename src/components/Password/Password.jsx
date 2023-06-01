import React, { useState } from "react";
import styles from "./Password.module.scss";
const Password = ({
  value,
  setValue,
  className,
  width,
  height,
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
      <div className={styles.inputwrapper} style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{ width, height, borderRadius: "4px" }}
        />
        <img
          className={styles.eyeicon}
          src={
            showPassword
              ? require("../../assets/eye-open.png")
              : require("../../assets/eye-close.png")
          }
          alt={showPassword ? "Hide Password" : "Show Password"}
          onClick={togglePasswordVisibility}
        />
      </div>
    </div>
  );
};

export default Password;
