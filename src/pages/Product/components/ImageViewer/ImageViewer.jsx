import React, { useState } from "react";
import styles from "./ImageViewer.module.scss";
import { ICONS } from "../../../../icons";
import useWishlist from "../../../../apis/useWishlist";
import { useAuth } from "../../../../contexts/AuthContext";

const ImageViewer = ({
  product,
  fetchProduct,
  isWishlisted,
  setIsWishlisted,
}) => {
  const images = product?.Images;
  const [activeImage, setActiveImage] = useState(images[0].image_url);
  const { user } = useAuth();

  const { addToWishlist, removeFromWishlist } = useWishlist();

  const removeFromWishListHandler = () => {
    if (user) {
      removeFromWishlist(product.product_id, () => {
        const updatedList = JSON.parse(localStorage.getItem("wishlist")).filter(
          (item) => {
            return item != product?.product_id;
          }
        );
        setIsWishlisted(false);
        localStorage.setItem("wishlist", JSON.stringify(updatedList));
        fetchProduct();
      });
    } else {
      const updatedList = JSON.parse(localStorage.getItem("wishlist")).filter(
        (item) => {
          return item != product?.product_id;
        }
      );
      setIsWishlisted(false);
      localStorage.setItem("wishlist", JSON.stringify(updatedList));
      fetchProduct();
    }
  };

  const addToWishListHandler = () => {
    if (user) {
      addToWishlist(product.product_id, () => {
        // set wishlist in local storage as well for checking on rendering
        if (JSON.parse(localStorage.getItem("wishlist")) == null) {
          localStorage.setItem(
            "wishlist",
            JSON.stringify([product?.product_id])
          );
          setIsWishlisted(true);
        } else {
          localStorage.setItem(
            "wishlist",
            JSON.stringify([
              ...JSON.parse(localStorage.getItem("wishlist")),
              product?.product_id,
            ])
          );
          setIsWishlisted(true);
        }
        fetchProduct();
      });
    } else {
      if (JSON.parse(localStorage.getItem("wishlist")) == null) {
        localStorage.setItem("wishlist", JSON.stringify([product?.product_id]));
        setIsWishlisted(true);
      } else {
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

  return (
    <div className={styles.imageviewer}>
      <div className={styles.topimage}>
        <img src={activeImage} alt="top" />
        <div
          onClick={
            isWishlisted ? removeFromWishListHandler : addToWishListHandler
          }
          className={styles.wish}
        >
          {isWishlisted ? ICONS.heartCutOutline : ICONS.heartOutline}
        </div>
      </div>
      <div className={styles.bottomImages}>
        {images.map((img, index) => {
          return (
            <div
              onClick={() => setActiveImage(img)}
              className={styles.imgwrapper}
            >
              <img key={index} src={img?.image_url} alt="botom" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageViewer;
