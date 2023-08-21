import { ICONS } from "../../icons";
import styles from "./Checkbox.module.scss";

const Checkbox = ({
  name,
  value,
  checked,
  tick,
  onChange,
  className,
  shadowed = false,
  ...rest
}) => {
  return (
    <label className={`${styles.checkbox} `}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        onClick={(e) => {
          onChange(e);
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
