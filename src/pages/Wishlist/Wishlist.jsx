import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.scss";
import Card from "../../components/Card/Card";
import useWishlist from "../../apis/useWishlist";
import { useAuth } from "../../contexts/AuthContext";
import useShop from "../../apis/useShop";

const Wishlist = () => {
  const { getWishlist, getWishlistLoading } = useWishlist();
  const { getProducts, getProductsLoading } = useShop();
  const user = useAuth();
  const [localWish, setLocalWish] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  const [wishlist, setWishlist] = useState(null);

  const fetchWishlist = async () => {
    await getWishlist((data) => {
      setWishlist(data.data?.Product);
    });
  };

  const fetchProducts = async () => {
    await getProducts(localWish, (data) => {
      setWishlist(data?.data);
    });
  };

  useEffect(() => {
    if (user) fetchWishlist();
    else fetchProducts();
  }, []);

  console.log(wishlist);
  return (
    <div className={styles.wishlist}>
      <h5>Your wishlist</h5>

      <div className={styles.wishlistitems}>
        {!getWishlistLoading ? (
          <>
            {wishlist.length !== 0 ? (
              <>
                {wishlist?.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      renderFromWishlist={true}
                      fetchWishlist={fetchWishlist}
                      product={item}
                    />
                  );
                })}
              </>
            ) : (
              <>WishList empty </>
            )}
          </>
        ) : (
          <>Loading</>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
