import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid md:grid-cols-2 pt-8 px-8">
        <div className="p-4 flex flex-col justify-center">
          <h3 className="text-4xl font-mono font-bold text-cyan-800">
            Get Along With
          </h3>
          <h3 className="text-3xl font-mono font-bold text-purple-500 my-3">
            Your Best Laptop
          </h3>
          <p className="text-gray-700 mb-4 mr-4">
            A laptop person like you have to explore this product. This time it
            comes with new and powerful features as you want. You can checkout
            our Website for more products.
          </p>
          <div>
            <button className="my-4 text-xl px-3 py-2  rounded font-bold bg-purple-400 text-white hover:bg-purple-900">
              Live Demo
            </button>
          </div>
        </div>
        <div>
          <img
            src={
              "https://img.freepik.com/free-psd/mockup-gaming-laptop-with-rgb-led-keyboard-glow_74058-461.jpg?size=626&ext=jpg&ga=GA1.1.1395737918.1641046705"
            }
            alt=""
            className="p-8 rounded"
          ></img>
        </div>
      </div>
      <div>
        {reviews.slice(0, 3).map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
        <Link to={"/review"}>
          <button>see all review</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
