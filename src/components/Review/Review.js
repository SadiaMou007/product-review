import React from "react";
import useReviews from "../../Hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      {reviews.map((review) => (
        <ReviewDetail key={review.id} review={review}></ReviewDetail>
      ))}
    </div>
  );
};

export default Review;
