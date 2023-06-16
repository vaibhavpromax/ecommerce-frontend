import React, { useState } from 'react';
import styles from "./Select.module.scss"
const Select = ({ isSearch, isMultiSelect, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (event) => {
    const { value } = event.target;
    if (isMultiSelect) {
      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter((option) => option !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    } else {
      setSelectedOptions([value]);
    }
  };

  return (
    <select className={styles.customizedselect}
      multiple={isMultiSelect}
      onChange={handleOptionSelect}
    >
      {isSearch && (
        <option value="">Search...</option>
      )}
      {options.map((option) => (
        <option
          key={option}
          value={option}
          selected={selectedOptions.includes(option)}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
