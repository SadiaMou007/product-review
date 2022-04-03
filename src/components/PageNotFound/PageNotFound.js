import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-yellow-100 text-bold p-8 grid md:grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <h3 className=" text-3xl text-red-600">Page Not Found!!!</h3>
        <Link to={"/home"}>
          <button className="bg-cyan-500 font-bold p-2 m-2 rounded text-cyan-900 text-xl border-2 hover:bg-cyan-200">
            Go Back Home
          </button>
        </Link>
      </div>
      <div>
        <img
          src={
            "https://img.freepik.com/free-photo/oops-awkward-confused-african-american-man-shrugging-shoulders-looking-worried-raising-empty-hands-up-dont-know-how-accident-happened-made-small-silly-mistake-white-background_176420-46751.jpg?size=626&ext=jpg&ga=GA1.2.1395737918.1641046705"
          }
          alt=""
          className="rounded"
        ></img>
      </div>
    </div>
  );
};

export default PageNotFound;
