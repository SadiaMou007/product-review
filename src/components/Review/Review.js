import React from "react";
import useReviews from "../../Hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="grid  m-4 p-4 gap-8 bg-slate-100 md:grid-cols-2">
      {reviews.map((review) => (
        <ReviewDetail key={review.id} review={review}></ReviewDetail>
      ))}
    </div>
  );
};

export default Review;
