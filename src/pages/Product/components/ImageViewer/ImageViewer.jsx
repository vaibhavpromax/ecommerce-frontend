import React, { useState } from "react";
import styles from "./ImageViewer.module.scss";
import { ICONS } from "../../../../icons";
import useWishlist from "../../../../apis/useWishlist";

// const images = [
//   "https://i.pinimg.com/originals/16/2c/80/162c8076aee14e1f8b9277c077471d4d.jpg",
//   "https://static.vecteezy.com/system/resources/previews/004/731/813/original/instant-coffee-in-a-paper-package-with-the-label-coffee-illustration-in-doodle-style-vector.jpg",
//   "https://static.vecteezy.com/system/resources/previews/015/400/106/non_2x/coffee-takeaway-cup-realistic-and-sack-with-coffee-beans-coffee-to-go-lettering-close-up-take-out-coffee-with-brown-cap-and-cup-holder-illustration-for-cafe-voucher-flyer-template-vector.jpg",
//   "https://thumbs.dreamstime.com/b/coffee-cup-sweets-delicious-vector-modern-icons-coffee-shop-coffee-house-colorful-template-cooking-restaurant-95959851.jpg",
// ];

const ImageViewer = ({ product, fetchProduct }) => {
  const images = product?.Images;
  const [activeImage, setActiveImage] = useState(images[0].image_url);

  const { addToWishlist, removeFromWishlist } = useWishlist();

  const removeFromWishListHandler = () => {
    removeFromWishlist(product.product_id, () => {
      fetchProduct();
    });
  };
  const addToWishListHandler = () => {
    addToWishlist(product.product_id, () => {
      fetchProduct();
    });
  };

  return (
    <div className={styles.imageviewer}>
      <div className={styles.topimage}>
        <img src={activeImage} alt="top" />
        <div
          onClick={
            product?.is_wishlisted
              ? removeFromWishListHandler
              : addToWishListHandler
          }
          className={styles.wish}
        >
          {product?.is_wishlisted ? ICONS.heartCutOutline : ICONS.heartOutline}
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
