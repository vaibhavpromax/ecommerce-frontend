import React from "react";
import "./RatingStar.css";
const StarRating = ({ rating }) => {
  // Calculate the number of filled stars and half stars based on the rating
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  // Function to generate stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(
          <div key={i} className="star filled-star">
            &#9733;
          </div>
        ); // Add the "filled-star" class here
      } else if (i === filledStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="star">
            &#9733;&#189;
          </div>
        );
      } else {
        stars.push(
          <div key={i} className="star">
            &#9734;
          </div>
        );
      }
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
