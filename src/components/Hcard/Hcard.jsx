// HCard.jsx
import React, { useEffect, useState } from "react";
import styles from "./Hcard.module.scss";
import Trash from "../../assets/trash.svg";
import svgImage from "../../assets/TeaPacket.svg";
import { ICONS } from "../../icons";
import { useNavigate } from "react-router-dom";
import useCart from "../../apis/useCart";
import Counter from "../Counter/Counter";

const HCard = ({
  width = "100%",
  height = "160px",
  product,
  cart_quantity,
  fetchCart,
}) => {
  const cardStyle = {
    width,
    height,
  };
  const [counterValue, setCounterValue] = useState(cart_quantity);
  const navigate = useNavigate();
  const { addToCart, addToCartLoading } = useCart();
  const removeFromCart = () => {
    addToCart({ product_id: product?.product_id, quantity: 0 }, () => {
      fetchCart();
    });
  };

  useEffect(() => {
    if (counterValue != cart_quantity) {
      console.log("update cart");
      addToCart(
        { product_id: product?.product_id, quantity: counterValue },
        () => {
          fetchCart();
        }
      );
    }
  }, [counterValue]);

  return (
    <div className={styles.hcard} style={cardStyle}>
      <div className={styles.main}>
        <img src={product?.Images[0]?.image_url} alt="Nophoto" />
      </div>
      <div className={styles.p1}>
        <span className={styles.p1Text}>{product?.name}</span>
        <div
          onClick={() => {
            navigate(`/product/${product?.product_id}`);
          }}
          className={styles.link}
        >
          View Product
        </div>
      </div>
      <div className={styles.p2}>
        <Counter
          counterValue={counterValue}
          setCounterValue={setCounterValue}
        />
        <span onClick={removeFromCart} className={styles.trash}>
          {ICONS.trash}
        </span>
      </div>
      <div className={styles.p3}>
        <p className={styles.discountedprice}>$ {product?.selling_price}</p>
        <p className={styles.rate}>
          <span className={styles.strike}>${product?.cost_price}</span>(
          {product?.discount_value}% off)
        </p>
      </div>
    </div>
  );
};

export default HCard;
