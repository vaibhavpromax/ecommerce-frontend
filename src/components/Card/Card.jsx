import React, { useState } from "react";
import styles from "./Card.module.scss";
import svgImage from "../../assets/TeaPacket.svg";
import Button from "../Button/Button";
import { ICONS } from "../../icons";
import { useNavigate } from "react-router-dom";
import useWishlist from "../../apis/useWishlist";
import useCart from "../../apis/useCart";
import Counter from "../Counter/Counter";

const Card = ({
  width = "280px",
  height = "396px",
  product,
  fetchWishlist,
  fetchProducts,
  renderFromWishlist,
}) => {
  const navigate = useNavigate();
  const cardStyle = {
    width,
    height,
  };
  const { removeFromWishlist, addToWishlist } = useWishlist();
  const { addToCart, addToCartLoading } = useCart();
  const [counterValue, setCounterValue] = useState(1);
  const openProductHandler = () => {
    navigate(`/product/${product?.product_id}`);
  };

  const removeFromWishListHandler = () => {
    removeFromWishlist(product.product_id, () => {
      if (renderFromWishlist) fetchWishlist();
      else fetchProducts();
    });
  };

  const addToWishListHandler = () => {
    addToWishlist(product.product_id, () => {
      fetchProducts();
    });
  };

  const addToCartHandler = () => {
    addToCart(
      { product_id: product.product_id, quantity: counterValue },
      () => {}
    );
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.upper}>
        <div className={styles.center}>
          <img
            onClick={openProductHandler}
            src={product?.Images[0]?.image_url}
            alt="CenterImage"
          />
          <div
            onClick={
              product?.is_wishlisted
                ? removeFromWishListHandler
                : addToWishListHandler
            }
            className={styles.circle}
          >
            {product?.is_wishlisted
              ? ICONS.heartCutOutline
              : ICONS.heartOutline}
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <h2>{product?.name}</h2>
        <p>{product?.description}</p>
        <span className={styles.rate}>
          <span className={styles.firstletter}>{product?.selling_price}$ </span>{" "}
          per unit
        </span>
        <div className={styles.btnrow}>
          <Button className={styles.atcbtn} onClick={addToCartHandler}>
            Add to Cart
          </Button>
          <Counter
            counterValue={counterValue}
            setCounterValue={setCounterValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
