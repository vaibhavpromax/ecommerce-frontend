import React from "react";
import styles from "./Counter.module.scss";
import { ICONS } from "../../icons";

const Counter = ({
  counterValue,
  setCounterValue,
  onChange = () => {
    return;
  },
}) => {
  return (
    <div className={styles.counter}>
      <button
        className={styles.minus}
        onClick={() => {
          if (counterValue == 1) return;
          setCounterValue(counterValue - 1);
          onChange(counterValue - 1);
        }}
      >
        {ICONS.minus}
      </button>
      <button className={styles.quantity}>{counterValue}</button>
      <button
        className={styles.add}
        onClick={() => {
          if (counterValue == 5) return;
          setCounterValue(counterValue + 1);
          onChange(counterValue + 1);
        }}
      >
        {ICONS.plus}
      </button>
    </div>
  );
};

export default Counter;
