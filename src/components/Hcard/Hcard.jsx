// HCard.jsx
import React from "react";
import styles from "./Hcard.module.scss";
import Trash from "../../assets/trash.svg";
import svgImage from  "../../assets/TeaPacket.svg"
const HCard = ({
  width = "100%",
  height = "300px",
  heading = "African Kahawa blend",
  discountedprice = "20.15$ per unit",
  rate = "$22.00 (10% off)",
  
  onIncreaseQuantity = () => {},
  onDecreaseQuantity = () => {},
  quantity = "1",
}) => {
  const cardStyle = {
    width,
    height,
  };

  return (
    <div className={styles.hcard} style={cardStyle}>
      <div className={styles.main}>
        <img src={svgImage} alt="Nophoto" />
      </div>
      <div className={styles.p1}>
        <span className={styles.p1Text}>{heading}</span>
        <a href="abc.com">View Product</a>
      </div>
      <div className={styles.p2}>
        <div className={styles.p2sub}>
          <button className={styles.add} onClick={onIncreaseQuantity}>
            +
          </button>
          <button className={styles.quantity}>{quantity}</button>
          <button className={styles.minus} onClick={onDecreaseQuantity}>
            -
          </button>
        </div>
        <img src={Trash} alt="Delete" className={styles.trash} />
      </div>
      <div className={styles.p3}>
        <p className={styles.discountedprice}>{discountedprice}</p>
        <p className={styles.rate}>{rate}</p>
      </div>
    </div>
  );
};

export default HCard;
