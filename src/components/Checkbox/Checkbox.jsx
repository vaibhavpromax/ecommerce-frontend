import { useState } from "react";
import { ICONS } from "../../icons";
import styles from "./Checkbox.module.scss";

const themes = {
  WHITE: "WHITE",
  BROWN: "BROWN",
};

const Checkbox = ({
  name,
  value,
  checked,
  tick,
  theme = "WHITE",
  onChange,
  className,
  shadowed = false,
  ...rest
}) => {
  const [ticked, setTicked] = useState(false);
  return (
    <label className={`${styles.checkbox} `}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        onClick={(e) => {
          onChange(e);
          setTicked(!ticked);
        }}
        onChange={() => null}
        {...rest}
      />
      <span className={` ${shadowed && styles.shadow}  ${styles.checkmark}`}>
        {tick && ICONS.tick}
      </span>
    </label>
  );
};

export default Checkbox;
