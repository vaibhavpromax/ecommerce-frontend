import React, { useEffect, useState } from "react";
import styles from "./ProductDesc.module.scss";
import { useParams } from "react-router-dom";
import { ICONS } from "../../../../icons";
import Button from "../../../../components/Button/Button";
import Select from "../../../../components/Select/Select";
import ImageViewer from "../ImageViewer/ImageViewer";
import StarRatings from "react-star-ratings";
import useProduct from "../../../../apis/useProduct";
import useCart from "../../../../apis/useCart";
import { useAuth } from "../../../../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const quantityOptions = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
};

const ProductDesc = () => {
  const { getProduct, getProductLoading } = useProduct();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart, addToCartLoading } = useCart();
  const [product, setProduct] = useState(null);
  const { user } = useAuth();
  const { id } = useParams();

  const fetchProduct = async () => {
    await getProduct(id, (data) => {
      setProduct(data.data);
      JSON.parse(localStorage.getItem("wishlist"))?.includes(
        data.data?.product_id
      )
        ? setIsWishlisted(true)
        : setIsWishlisted(false);
    });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCartHandler = () => {
    // const payload = {
    //   product_id: product?.product_id,
    //   quantity: quantity,
    // };
    // addToCart(payload, () => {
    //   setAddedToCart(true);
    // });

    // if user is logged in
    if (user) {
      addToCart({ product_id: product.product_id, quantity: quantity }, () => {
        toast.success("Added to cart", {
          style: {
            backgroundColor: "#F7F6F5",
            fontFamily: "Jost",
          },
        });
        setAddedToCart(true);
      });
    } else {
      // if user is not logged in
      if (JSON.parse(localStorage.getItem("cart")) === null) {
        console.log("absent", JSON.parse(localStorage.getItem("cart")));

        // if no cart in local storage make an item
        localStorage.setItem(
          "cart",
          JSON.stringify([{ id: product?.product_id, quantity: quantity }])
        );
      } else {
        console.log("present ", JSON.parse(localStorage.getItem("cart")));
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("cart")),
            { id: product?.product_id, quantity: quantity },
          ])
        );
      }
      setAddedToCart(true);
      toast.success("Added to cart", {
        style: {
          backgroundColor: "#F7F6F5",
          fontFamily: "Jost",
        },
      });
    }
  };

  return (
    <div className={styles.productDesc}>
      <Toaster />
      {!getProductLoading ? (
        <>
          <div className={styles.left}>
            {product && (
              <ImageViewer
                setIsWishlisted={setIsWishlisted}
                isWishlisted={isWishlisted}
                fetchProduct={fetchProduct}
                product={product}
              />
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.name}>{product?.name}</div>
            <div className={styles.price}>
              ${product?.selling_price}
              <span className={styles.disc}>
                {" "}
                <span className={styles.strike}>${product?.cost_price}</span> (
                {product?.discount_value}% off){" "}
              </span>
            </div>{" "}
            <div className={styles.desc}>{product?.description}</div>
            <div className={styles.info}>
              <div className={styles.infosec}>
                Pack of {product?.product_weight} gms
              </div>{" "}
              |
              <div className={styles.infosec}>
                Box size {product?.product_width}x{product?.product_height} cm
              </div>{" "}
              |
              <div className={styles.infosec}>
                Premium Arabica From {product?.product_origin}
              </div>
            </div>
            <div className={styles.starRating}>
              <StarRatings
                rating={3.69}
                starRatedColor="#B06934"
                numberOfStars={5}
                starDimension="24px"
                name="rating"
              />
            </div>
            <div className={styles.otherInfo}>
              <div className={styles.l1}>
                {ICONS.tick} Arrives soon! get it by 24th June if you order
                today
              </div>
              <div className={styles.l1}>
                {ICONS.tick} Returns & exchange available
              </div>
            </div>
            <div className={styles.quant}>
              <Select
                width="300px"
                placeholder={quantity}
                value={quantity}
                setValue={setQuantity}
                options={quantityOptions}
              />
            </div>
            <div className={styles.btnrow}>
              <Button>Buy Now</Button>
              <Button
                loading={addToCartLoading}
                onClick={() => {
                  if (addedToCart) return;
                  addToCartHandler();
                }}
                theme="WHITE"
              >
                {addedToCart ? <>{ICONS.tick} Added </> : "Add to cart"}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <> Loading</>
      )}
    </div>
  );
};

export default ProductDesc;
