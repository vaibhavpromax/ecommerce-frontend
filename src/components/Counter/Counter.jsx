import styles from "./Counter.module.scss";
const Counter = ({ onIncreaseQuantity, quantity, onDecreaseQuantity }) => {
  return (
    <>
      <div className={styles.p2sub}>
        <button className={styles.add} onClick={onIncreaseQuantity}>
          +
        </button>
        <button className={styles.quantity}>{quantity}</button>
        <button className={styles.minus} onClick={onDecreaseQuantity}>
          -
        </button>
      </div>
      
    </>
  );
};
export default Counter
