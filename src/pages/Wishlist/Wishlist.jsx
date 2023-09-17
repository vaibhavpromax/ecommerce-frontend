import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.scss";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Skeleton/Skeleton";
import useWishlist from "../../apis/useWishlist";
import { useAuth } from "../../contexts/AuthContext";
import useShop from "../../apis/useShop";
import { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const { getWishlist, getWishlistLoading } = useWishlist();
  const { getProducts, getProductsLoading } = useShop();
  const { user } = useAuth();
  const [localWish, setLocalWish] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  const [wishlist, setWishlist] = useState(null);

  const fetchWishlist = async () => {
    await getWishlist((data) => {
      console.log(data?.data);
      setWishlist(data?.data);
    });
  };

  const fetchProducts = async () => {
    await getProducts(
      { product_arr: JSON.parse(localStorage.getItem("wishlist")) },
      (data) => {
        setWishlist(data?.data);
      }
    );
  };

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      fetchProducts();
    }
  }, []);

  console.log(wishlist);
  return (
    <div className={styles.wishlist}>
      <Toaster />
      <h5>Your wishlist</h5>

      <div className={styles.wishlistitems}>
        {!getWishlistLoading || !getProductsLoading ? (
          <>
            {wishlist?.length !== 0 ? (
              <>
                {wishlist?.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      renderFromWishlist={true}
                      fetchProducts={fetchProducts}
                      fetchWishlist={fetchWishlist}
                      product={user ? item?.Product : item}
                    />
                  );
                })}
              </>
            ) : (
              <>WishList empty </>
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
  );
};

export default Wishlist;
