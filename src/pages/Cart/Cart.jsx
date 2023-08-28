import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import HCard from "../../components/Hcard/Hcard";
import Button from "../../components/Button/Button";
import useCart from "../../apis/useCart";
import { useAuth } from "../../contexts/AuthContext";
import useShop from "../../apis/useShop";

const Cart = () => {
  const { user } = useAuth();
  const [localCart, setLocalCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [cartitems, setCartitems] = useState([]);
  const [discount, setDiscount] = useState(null);
  const { getCart, getCartLoading } = useCart();
  const { getProducts, getProductsLoading } = useShop();

  const fetchCart = async () => {
    await getCart((data) => {
      setCartitems(data.data);
      data?.data?.CartItems?.map((item) => {
        setDiscount(
          (prev) =>
            prev + (item.Product.selling_price - item.Product.cost_price)
        );
      });
    });
  };

  const fetchShop = async () => {
    const passCart = localCart?.map((item) => {
      return item.id;
    });
    console.log(passCart);
    getProducts({ product_arr: passCart }, (data) => {
      setCartitems({ CartItems: data?.data });
      data?.data?.map((item) => {
        setDiscount((prev) => prev + (item.selling_price - item.cost_price));
      });
    });
  };

  console.log(localCart);

  useEffect(() => {
    if (user) fetchCart();
    else {
      fetchShop();
    }
  }, []);

  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <h4>Shopping Cart</h4>
        <div className={styles.cartitems}>
          {!getCartLoading || !getProductsLoading ? (
            <>
              {cartitems ? (
                <>
                  {cartitems?.CartItems?.map((item, index) => {
                    return (
                      <HCard
                        key={index}
                        cart_quantity={user ? item?.cart_quantity : null}
                        fetchCart={fetchCart}
                        fetchShop={fetchShop}
                        product={user ? item.Product : item}
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
