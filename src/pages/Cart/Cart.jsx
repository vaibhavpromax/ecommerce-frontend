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
  const [cartInfo, setCartInfo] = useState({
    discount: "",
    total: "",
    quantity: "",
  });
  const { getCart, getCartLoading } = useCart();
  const { getProducts, getProductsLoading } = useShop();

  const fetchCart = async () => {
    await getCart((data) => {
      setCartitems(data.data);
      setCartInfo({
        discount: "",
        total: data?.data?.cart_total,
        quantity: data?.data?.cart_quantity,
      });
      // data?.data?.CartItems?.map((item) => {
      //   // setDiscount(
      //   //   (prev) =>
      //   //     prev + (item.Product.selling_price - item.Product.cost_price)
      //   // );
      // });
    });
  };

  const fetchShop = async () => {
    let total = 0,
      quantity = 0;

    const passCart = JSON.parse(localStorage.getItem("cart"))?.map((item) => {
      quantity = quantity + item?.quantity;
      return item.id;
    });
    // console.log(passCart);
    getProducts({ product_arr: passCart }, (data) => {
      setCartitems({ CartItems: data?.data });
      // data?.data?.map((item) => {
      //   console.log(item);
      //   setDiscount((prev) => prev + (item.selling_price - item.cost_price));
      // });

      data?.data?.map((item) => {
        const quantity = JSON.parse(localStorage.getItem("cart")).filter(
          (it) => {
            if (it.id == item.product_id) {
              return it?.quantity;
            }
          }
        );
        console.log(quantity[0]?.quantity);
        total =
          total +
          parseInt(item.selling_price) * parseInt(quantity[0]?.quantity);
      });

      console.log(total);
      setCartInfo({
        discount: "",
        total: total,
        quantity: quantity,
      });
    });
  };

  // console.log(localCart);

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
          Sub total ({cartInfo?.quantity}{" "}
          {cartInfo?.quantity > 1 ? "items" : "item"}) :
          <span>${cartInfo?.total} </span>
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
