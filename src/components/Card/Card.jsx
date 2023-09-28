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
import toast from "react-hot-toast";
import { useShop } from "../../contexts/ShopContext";

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
  const { removeFromWishlist, addToWishlist, getWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { setCartLength, setWishlistLength } = useShop();
  const [localWish, setLocalWish] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  const [localCart, setLocalCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const { addToCart, addToCartLoading, getCart } = useCart();
  const { user } = useAuth();
  const [counterValue, setCounterValue] = useState(1);
  const openProductHandler = () => {
    navigate(`/product/${product?.product_id}`);
  };

  const removeFromWishListHandler = async () => {
    if (user) {
      removeFromWishlist(product.product_id, () => {
        setWishlistLength((prev) => {
          return prev - 1;
        });

        toast.success("Removed from wishlist", {
          style: {
            backgroundColor: "#F7F6F5",
            fontFamily: "Jost",
          },
        });
        const updatedList = JSON.parse(localStorage.getItem("wishlist")).filter(
          (item) => {
            return item != product?.product_id;
          }
        );
        setLocalWish(updatedList);
        setIsWishlisted(false);
        localStorage.setItem("wishlist", JSON.stringify(updatedList));

        if (renderFromWishlist) fetchWishlist();
        // else fetchProducts();
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
      if (renderFromWishlist) {
        fetchProducts();
      }
      setWishlistLength((prev) => {
        return prev - 1;
      });

      toast.success("Removed from wishlist", {
        style: {
          backgroundColor: "#F7F6F5",
          fontFamily: "Jost",
        },
      });
    }
  };

  const addToWishListHandler = async () => {
    if (user) {
      addToWishlist(product.product_id, () => {
        setWishlistLength((prev) => {
          return prev + 1;
        });
        // set wishlist in local storage as well for checking on rendering
        setLocalWish(JSON.parse(localStorage.getItem("wishlist")));
        if (JSON.parse(localStorage.getItem("wishlist")) == null) {
          localStorage.setItem(
            "wishlist",
            JSON.stringify([product?.product_id])
          );
          setIsWishlisted(true);
          toast.success("Added to wishlist", {
            style: {
              backgroundColor: "#F7F6F5",
              fontFamily: "Jost",
            },
          });
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
        // fetchProducts();
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
      setWishlistLength((prev) => {
        return prev + 1;
      });
      toast.success("Added to wishlist", {
        style: {
          backgroundColor: "#F7F6F5",
          fontFamily: "Jost",
        },
      });
    }
  };

  const addToCartHandler = async () => {
    // if user is logged in
    if (user) {
      addToCart(
        { product_id: product.product_id, quantity: counterValue },
        () => {
          setCartLength((prev) => {
            return prev + 1;
          });
          toast.success("Added to cart", {
            style: {
              backgroundColor: "#F7F6F5",
              fontFamily: "Jost",
            },
          });
        }
      );
    } else {
      // if user is not logged in
      if (JSON.parse(localStorage.getItem("cart")) === null) {
        // if no cart in local storage make an item
        localStorage.setItem(
          "cart",
          JSON.stringify([{ id: product?.product_id, quantity: counterValue }])
        );
        setLocalCart([{ id: product?.product_id, quantity: counterValue }]);
        setCartLength((prev) => {
          return prev + 1;
        });
        toast.success("Added to cart", {
          style: {
            backgroundColor: "#F7F6F5",
            fontFamily: "Jost",
          },
        });
      } else {
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
        toast.success("Added to cart", {
          style: {
            backgroundColor: "#F7F6F5",
            fontFamily: "Jost",
          },
        });
        setCartLength((prev) => {
          return prev + 1;
        });
      }
    }
  };

  useEffect(() => {
    localWish?.includes(product.product_id)
      ? setIsWishlisted(true)
      : setIsWishlisted(false);

    if (renderFromWishlist) setIsWishlisted(true);
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
