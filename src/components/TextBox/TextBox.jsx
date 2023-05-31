import React from "react";
import styles from "./Textbox.module.scss"
const TextBox = ({
  label,
  className,
  width = "100%",
  height = "40px",
  value,
  setValue,
  placeholder,
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={`${styles.first} ${className}`}>
      <label>{label}</label>
      <input
        type="text"
        style={{ width: width, height: height }}
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextBox;
