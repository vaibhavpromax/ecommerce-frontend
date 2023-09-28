import { createContext, useContext, useEffect, useState } from "react";
import useCart from "../apis/useCart";
import useWishlist from "../apis/useWishlist";
import { useAuth } from "./AuthContext";

const ShopContext = createContext({});

export const useShop = () => useContext(ShopContext);

const ShopProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);
  const { getCart } = useCart();
  const { user } = useAuth();
  const { getWishlist } = useWishlist();

  const setLengths = async () => {
    console.log("inside set length");
    await getCart((data) => {
      console.log(data?.data);
      setCartLength(data?.data?.length);
    });

    await getWishlist((data) => {
      console.log(data?.data);

      setWishlistLength(data?.data?.length);
    });
  };

  useEffect(() => {
    console.log("inside");
    if (user) {
      console.log("insdie user");
      setLengths();
    } else {
      console.log("no user");
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
  }, []);

  console.log("wish", wishlistLength);
  console.log("cart", cartLength);

  return (
    <ShopContext.Provider
      value={{
        cartLength,
        wishlistLength,
        setCartLength,
        setWishlistLength,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
