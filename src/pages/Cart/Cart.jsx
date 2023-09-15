import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import HCard from "../../components/Hcard/Hcard";
import Button from "../../components/Button/Button";
import useCart from "../../apis/useCart";
import { useAuth } from "../../contexts/AuthContext";
import useShop from "../../apis/useShop";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Skeleton";

const Cart = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [localCart, setLocalCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [cartitems, setCartitems] = useState([]);
  const [cartInfo, setCartInfo] = useState({
    discount: "",
    total: "",
    quantity: "",
  });
  const { getCart, getCartLoading, addToCart } = useCart();
  const { getProducts, getProductsLoading } = useShop();

  const fetchCart = async () => {
    await getCart((data) => {
      setCartitems(data.data);

      let cart_total = 0,
        cart_quantity = 0;

      data?.data?.map((cartItem) => {
        cart_total =
          cart_total +
          parseInt(cartItem.cart_quantity) *
            parseFloat(cartItem?.Product?.selling_price);
        cart_quantity = cart_quantity + parseInt(cartItem.cart_quantity);
      });

      setCartInfo({
        total: cart_total,
        discount: "",
        quantity: cart_quantity,
      });

      // setCartInfo({
      //   discount: "",
      //   total: data?.data?.cart_total,
      //   quantity: data?.data?.cart_quantity,
      // });
    });
  };

  const fetchShop = async () => {
    let total = 0,
      quantity = 0;

    if (!JSON.parse(localStorage.getItem("cart"))) {
      setCartitems(null);
      setCartInfo({
        discount: "",
        total: 0,
        quantity: 0,
      });
      return;
    }

    const passCart = JSON.parse(localStorage.getItem("cart"))?.map((item) => {
      quantity = quantity + item?.quantity;
      return item.id;
    });
    // console.log(passCart);
    getProducts({ product_arr: passCart }, (data) => {
      setCartitems({ CartItems: data?.data });
      data?.data?.map((item) => {
        const quantity = JSON.parse(localStorage.getItem("cart"))?.filter(
          (it) => {
            if (it.id == item.product_id) {
              return it;
            }
          }
        );
        total =
          total +
          parseInt(item.selling_price) * parseInt(quantity[0]?.quantity);
      });

      setCartInfo({
        discount: "",
        total: total,
        quantity: quantity,
      });
    });
  };
  // console.log(localCart);
  console.log(user);

  useEffect(() => {
    if (user && localStorage.getItem("cart")) {
      JSON.parse(localStorage.getItem("cart"))?.map(async (item) => {
        await addToCart(
          { product_id: item.id, quantity: item.quantity },
          (data) => {
            localStorage.removeItem("cart");
          }
        );
      });
      // delete cart from local storage
    }
    if (user) fetchCart();
    else {
      fetchShop();
    }
  }, []);

  const onCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <h4>Shopping Cart</h4>
        <div className={styles.cartitems}>
          {!getCartLoading || !getProductsLoading ? (
            <>
              {cartitems ? (
                <>
                  {cartitems?.map((item, index) => {
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
            <>
              {new Array(4).fill(0).map((_, index) => (
                <Skeleton key={index} className={styles.loader} />
              ))}
            </>
          )}
        </div>
      </div>

      <div className={styles.right}>
        {!getCartLoading || !getProductsLoading ? (
          <div className={styles.amount}>
            Sub total ({cartInfo?.quantity}{" "}
            {cartInfo?.quantity > 1 ? "items" : "item"}) :
            <span>${cartInfo?.total} </span>
          </div>
        ) : (
          <Skeleton className={styles.loader} />
        )}

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
          tempor incididunt ut ero labore
        </p>
        <Button onClick={onCheckoutHandler} className={styles.chckbtn}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
