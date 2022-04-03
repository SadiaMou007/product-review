import React from "react";
import "./ReviewDetails.css";
const ReviewDetail = (props) => {
  const { img, name, review, rating } = props.review;

  return (
    <div className="bg-white rounded p-4">
      <div className="grid grid-cols-5 bg-purple-50 rounded">
        <img src={img} alt="" className="col-span-1 rounded-full p-2" />
        <p className="col-span-4 my-auto mx-2 text-xl text-cyan-700 font-bold">
          {name}{" "}
        </p>
      </div>

      {rating < 5 ? ( //conditional rendering
        <p className="p-2">Rating is less than 5</p>
      ) : (
        <p className="p-2">Full star rating</p>
      )}
      <p className="my-3">
        <span className="font-bold text-cyan-700">Review: </span>
        {review}
      </p>
      <p>
        <span className="font-bold text-cyan-700">Rating:</span> {rating}
      </p>
    </div>
  );
};

export default ReviewDetail;
