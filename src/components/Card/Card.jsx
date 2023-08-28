import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import svgImage from "../../assets/TeaPacket.svg";
import Button from "../Button/Button";
import { ICONS } from "../../icons";
import { useNavigate } from "react-router-dom";
import useWishlist from "../../apis/useWishlist";
import useCart from "../../apis/useCart";
import Counter from "../Counter/Counter";
import { useAuth } from "../../contexts/AuthContext";

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
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [localWish, setLocalWish] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  const [localCart, setLocalCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const { addToCart, addToCartLoading } = useCart();
  const { user } = useAuth();
  const [counterValue, setCounterValue] = useState(1);
  const openProductHandler = () => {
    navigate(`/product/${product?.product_id}`);
  };

  const removeFromWishListHandler = () => {
    if (user) {
      removeFromWishlist(product.product_id, () => {
        if (renderFromWishlist) fetchWishlist();
        else fetchProducts();
      });
    } else {
      const updatedList = JSON.parse(localStorage.getItem("wishlist")).filter(
        (item) => {
          return item != product?.product_id;
        }
      );
      setLocalWish(updatedList);
      setIsWishlisted(false);
      localStorage.setItem("wishlist", JSON.stringify(updatedList));
    }
  };

  const addToWishListHandler = () => {
    if (user) {
      addToWishlist(product.product_id, () => {
        fetchProducts();
      });
    } else {
      if (JSON.parse(localStorage.getItem("wishlist")) == null) {
        localStorage.setItem("wishlist", JSON.stringify([product?.product_id]));
        setLocalWish(JSON.parse(localStorage.getItem("wishlist")));
        setIsWishlisted(true);
      } else {
        setLocalWish([
          ...JSON.parse(localStorage.getItem("wishlist")),
          product?.product_id,
        ]);
        localStorage.setItem(
          "wishlist",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("wishlist")),
            product?.product_id,
          ])
        );
        setIsWishlisted(true);
      }
    }
  };

  const addToCartHandler = async () => {
    // if user is logged in
    if (user) {
      addToCart(
        { product_id: product.product_id, quantity: counterValue },
        () => {}
      );
    } else {
      // if user is not logged in
      if (JSON.parse(localStorage.getItem("cart")) === null) {
        console.log("absent", JSON.parse(localStorage.getItem("cart")));

        // if no cart in local storage make an item
        localStorage.setItem(
          "cart",
          JSON.stringify([{ id: product?.product_id, quantity: counterValue }])
        );

        // console.log([{ id: product?.product_id, quantity: counterValue }]);

        setLocalCart([{ id: product?.product_id, quantity: counterValue }]);
      } else {
        console.log("present ", JSON.parse(localStorage.getItem("cart")));
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("cart")),
            { id: product?.product_id, quantity: counterValue },
          ])
        );
        setLocalCart([
          ...JSON.parse(localStorage.getItem("cart")),
          { id: product?.product_id, quantity: counterValue },
        ]);
      }
    }
  };
  // console.log(localWish, localCart);

  useEffect(() => {
    localWish?.includes(product.product_id)
      ? setIsWishlisted(true)
      : setIsWishlisted(false);
  }, [localWish]);

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
              isWishlisted ? removeFromWishListHandler : addToWishListHandler
            }
            className={styles.circle}
          >
            {isWishlisted ? ICONS.heartCutOutline : ICONS.heartOutline}
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
