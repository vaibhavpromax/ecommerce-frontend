import React from "react";
import styles from "./Card.module.scss";
import svgImage from "../../assets/TeaPacket.svg";

const Card = ({
  width = "266px",
  height = "396px",
  backgroundColor = "#F7F6F5",
  heading = "African Kahawa blend",
  paragraph = "Lorem ipsum dolor sit amet, consectetur ad..",
  rate = "20$ per unit",
  onAddToCart = () => {},
  onIncreaseQuantity = () => {},
  onDecreaseQuantity = () => {},
  quantity = "0",
}) => {
  const cardStyle = {
    width,
    height,
  };
  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.upper} style={{ backgroundColor }}>
        <div className={styles.center}>
          <img src={svgImage} alt="CenterImage" />
          <div className={styles.circle}>
            <span>&#9825;</span>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <span className={styles.rate}>
          <span className={styles.firstletter}>{rate.substr(0, 3)}</span>
          {rate.slice(3)}
        </span>
        <button className={styles.addtocart} onClick={onAddToCart}>
          Add to Cart
        </button>
        <button className={styles.add} onClick={onIncreaseQuantity}>
          +
        </button>
        <button className={styles.quantity}>{quantity}</button>
        <button className={styles.minus} onClick={onDecreaseQuantity}>
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
