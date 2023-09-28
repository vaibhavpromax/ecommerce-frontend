import { createContext, useContext, useEffect, useState } from "react";
import useCart from "../apis/useCart";
import useWishlist from "../apis/useWishlist";

const ShopContext = createContext({});

export const useShop = () => useContext(ShopContext);

const ShopProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);
  const [flag, setFlag] = useState(100);
  const { getCart } = useCart();
  const { getWishlist } = useWishlist();

  const setLengths = async () => {
    await getCart((data) => {
      setCartLength(data?.data?.length);
    });
    await getWishlist((data) => {
      setWishlistLength(data?.data?.length);
    });
  };

  useEffect(() => {
    console.log("inside");
    if (JSON.parse(localStorage.getItem("user"))) {
      setLengths();
    } else {
      setCartLength(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart")).length
          : 0
      );
      setWishlistLength(
        JSON.parse(localStorage.getItem("wishlist"))
          ? JSON.parse(localStorage.getItem("wishlist")).length
          : 0
      );
    }

    console.log("wish", JSON.parse(localStorage.getItem("wishlist"))?.length);
    console.log("cart", JSON.parse(localStorage.getItem("cart"))?.length);
  }, [flag]);

  console.log(flag);

  return (
    <ShopContext.Provider
      value={{
        cartLength,
        wishlistLength,
        setCartLength,
        setWishlistLength,
        setFlag,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
