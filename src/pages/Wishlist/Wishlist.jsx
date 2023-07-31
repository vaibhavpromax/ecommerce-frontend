import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.scss";
import Card from "../../components/Card/Card";
import useWishlist from "../../apis/useWishlist";

const Wishlist = () => {
  const { getWishlist, getWishlistLoading } = useWishlist();
  const [wishlist, setWishlist] = useState(null);

  const fetchWishlist = async () => {
    getWishlist((data) => {
      setWishlist(data.data);
    });
  };

  useEffect(() => {
    fetchWishlist();
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
                      product={item.Product}
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
