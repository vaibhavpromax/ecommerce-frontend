import React, { useState } from "react";
import styles from "./RateProductModal.module.scss";
import Modal from "../../../../../../components/Modal/Modal";
import StarRatings from "react-star-ratings";
import Button from "../../../../../../components/Button/Button";
import useReview from "../../../../../../apis/useReview";
import toast from "react-hot-toast";

const RateProductModal = ({
  ratingModal,
  closeRatingModal,
  product_id,
  order_id,
}) => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const { addReview, addReviewLoading } = useReview();
  const addReviewHandler = async () => {
    await addReview(
      {
        product_id: product_id,
        description: description,
        rating: rating,
        order_id: order_id,
      },
      () => {
        toast.success("Review added", {
          style: {
            backgroundColor: "#F7F6F5",
            fontFamily: "Jost",
          },
        });
        closeRatingModal();
      }
    );
  };
  return (
    <Modal
      isModal={ratingModal}
      onClose={closeRatingModal}
      className={styles.rateProductModal}
    >
      <h4>Rate this product</h4>
      <div className={styles.rating}>
        <StarRatings
          changeRating={(r) => {
            setRating(r);
          }}
          rating={rating}
          starDimension="25px"
          numberOfStars={5}
          starRatedColor="#B06934"
          starHoverColor="#B06934"
        />
      </div>

      <textarea
        resize="none"
        rows={10}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        cols={50}
        placeholder="Add a review"
        className={styles.textarea}
      />
      <Button onClick={addReviewHandler} loading={addReviewLoading}>
        Submit
      </Button>
    </Modal>
  );
};

export default RateProductModal;
