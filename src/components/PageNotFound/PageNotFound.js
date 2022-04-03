import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-yellow-100 text-bold  flex flex-col items-center pt-16">
      <h3 className=" text-3xl text-red-600">Page Not Found!!!</h3>
      <Link to={"/home"}>
        <button className="bg-cyan-500 font-bold p-2 m-2 rounded text-cyan-900 text-xl border-2 hover:bg-cyan-200">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
