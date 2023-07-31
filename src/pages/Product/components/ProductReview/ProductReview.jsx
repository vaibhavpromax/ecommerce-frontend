import React from "react";
import styles from "./ProductReview.module.scss";
import { demoReviews } from "./demodata";
import StarRatings from "react-star-ratings";
import moment from "moment";
import { ICONS } from "../../../../icons";

const ProductReview = () => {
  const newReviews = [demoReviews[0], demoReviews[1], demoReviews[2]];

  const numberOfPages = Math.ceil(demoReviews?.length / 3);

  const arrayOfPages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    arrayOfPages.push(i);
  }

  return (
    <div className={styles.productRevWrapper}>
      <div className={styles.productReview}>
        <div className={styles.header}>
          <div className={styles.left}>
            {demoReviews.length} Product Reviews
          </div>
          <div className={styles.right}>
            Sort by: Latest {ICONS.dropDownArrow}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.reviews}>
          {newReviews?.map((review, index) => {
            return (
              <div className={styles.review}>
                <div className={styles.userinfo}>
                  <img src={review.profile_pic} alt="user" />
                  {review.user}
                </div>
                <div className={styles.rating}>
                  <StarRatings
                    rating={review?.rating}
                    starRatedColor="#B06934"
                    numberOfStars={5}
                    starDimension="24px"
                    name="rating"
                  />
                </div>
                <div className={styles.desc}>{review?.desc}</div>
                <div className={styles.date}>
                  Posted on : {moment(review?.postedOn).format("DD MMM, YYYY")}
                </div>
                <div className={styles.line}></div>
              </div>
            );
          })}
        </div>
        <div className={styles.pagesrow}>
          {arrayOfPages?.map((item, index) => {
            return (
              <div key={index} className={styles.pagebox}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
