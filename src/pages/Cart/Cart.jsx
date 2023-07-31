import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import HCard from "../../components/Hcard/Hcard";
import Button from "../../components/Button/Button";
import useCart from "../../apis/useCart";

const Cart = () => {
  const [cartitems, setCartitems] = useState([]);
  const [discount, setDiscount] = useState(null);
  const { getCart, getCartLoading } = useCart();

  const fetchCart = async () => {
    await getCart((data) => {
      setCartitems(data.data);
    });

    cartitems?.CartItems?.map((item) => {
      console.log(item.Product.selling_price - item.Product.cost_price);
      setDiscount(
        (prev) => prev + (item.Product.selling_price - item.Product.cost_price)
      );
    });
  };
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <h4>Shopping Cart</h4>
        <div className={styles.cartitems}>
          {!getCartLoading ? (
            <>
              {cartitems ? (
                <>
                  {cartitems?.CartItems?.map((item, index) => {
                    return (
                      <HCard
                        cart_quantity={item?.cart_quantity}
                        fetchCart={fetchCart}
                        product={item.Product}
                      />
                    );
                  })}
                </>
              ) : (
                <h1>No items in cart</h1>
              )}
            </>
          ) : (
            <>Loading</>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.amount}>
          Sub total ({cartitems?.cart_quantity}{" "}
          {cartitems?.cart_quantity > 1 ? "items" : "items"}) :
          <span>${cartitems?.cart_total} </span>
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
