import React, { useEffect, useState } from "react";
import styles from "./ProductReview.module.scss";
import { demoReviews } from "./demodata";
import StarRatings from "react-star-ratings";
import moment from "moment";
import { ICONS } from "../../../../icons";
import useReview from "../../../../apis/useReview";
import { useParams } from "react-router-dom";

const ProductReview = () => {
  const newReviews = [demoReviews[0], demoReviews[1], demoReviews[2]];
  const { getReviews, getReviewsLoading } = useReview();
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const fetchReviews = async () => {
    await getReviews(id, (data) => {
      setReviews(data?.data);
      setNumberOfPages(data?.data.length / 3);
    });
  };

  const arrayOfPages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    arrayOfPages.push(i);
  }

  useEffect(() => {
    fetchReviews();
  }, []);

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
          {reviews?.map((review, index) => {
            return (
              <div className={styles.review}>
                <div className={styles.userinfo}>
                  <img src={review.User?.profile_pic_url} alt="user" />
                  {review.User?.first_name + " " + review.User?.last_name}
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
                <div className={styles.desc}>{review?.description}</div>
                <div className={styles.date}>
                  Posted on : {moment(review?.createdAt).format("DD MMM, YYYY")}
                </div>
                <div className={styles.line}></div>
              </div>
            );
          })}
        </div>
        {/* 
        <div className={styles.pagesrow}>
        {arrayOfPages?.map((item, index) => {
          return (
            <div key={index} className={styles.pagebox}>
            {item}
            </div>
            );
          })}
          </div>
        */}
      </div>
    </div>
  );
};

export default ProductReview;
