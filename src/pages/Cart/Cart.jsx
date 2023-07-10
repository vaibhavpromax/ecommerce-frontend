import React from "react";
import styles from "./Cart.module.scss";
import HCard from "../../components/Hcard/Hcard";
import Button from "../../components/Button/Button";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <h4>Shopping Cart</h4>
        <div className={styles.cartitems}>
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.amount}>
          Sub total (2 items) :<span>$45.15 </span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
          tempor incididunt ut ero labore
        </p>
        <Button className={styles.chckbtn}>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
