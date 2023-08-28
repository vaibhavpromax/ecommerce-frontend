// HCard.jsx
import React, { useEffect, useState } from "react";
import styles from "./Hcard.module.scss";
import Trash from "../../assets/trash.svg";
import svgImage from "../../assets/TeaPacket.svg";
import { ICONS } from "../../icons";
import { useNavigate } from "react-router-dom";
import useCart from "../../apis/useCart";
import Counter from "../Counter/Counter";
import { useAuth } from "../../contexts/AuthContext";

const HCard = ({
  width = "100%",
  height = "160px",
  product,
  cart_quantity,
  fetchShop,
  fetchCart,
}) => {
  const cardStyle = {
    width,
    height,
  };
  const [counterValue, setCounterValue] = useState(cart_quantity);
  const [localCart, setLocalCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const { user } = useAuth();
  const navigate = useNavigate();
  const { addToCart, addToCartLoading } = useCart();
  const removeFromCart = () => {
    addToCart({ product_id: product?.product_id, quantity: 0 }, () => {
      fetchCart();
    });
  };

  useEffect(() => {
    // if (counterValue != cart_quantity) {
    // console.log("update cart");
    if (user) {
      addToCart(
        { product_id: product?.product_id, quantity: counterValue },
        () => {
          fetchCart();
        }
      );
    } else {
      localCart.map((item) => {
        if (item.id == product?.product_id) {
          if (counterValue == 0) {
            const newArray = localCart.filter((it) => it != item);
            localStorage.setItem(JSON.stringify(newArray));
            setLocalCart(newArray);
            //remove product from local storage
          } else {
            // set the quantity to the desired
            const newArray = localCart.map((it) => {
              if (it.id == product?.product_id) {
                return { quantity: counterValue, id: product?.product_id };
              } else {
                return it;
              }
            });
            localStorage.setItem("cart", JSON.stringify(newArray));
            setLocalCart(newArray);
          }
        }
      });
    }
    // }
  }, [counterValue]);

  useEffect(() => {
    if (user) {
      localCart.map(async (item) => {
        await addToCart(
          { product_id: item.id, quantity: item.quantity },
          (data) => {
            console.log(data);
          }
        );
      });
      // delete cart from local storage
    } else {
      localCart.map((item) => {
        if (item.id == product?.product_id) {
          setCounterValue(item.quantity);
        }
      });
    }
  }, []);

  console.log(product);

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
