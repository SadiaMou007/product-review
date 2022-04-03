import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { ShoppingBagIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="bg-purple-900 sticky top-0 text-center p-3 md:flex justify-between">
      <div className="text-3xl text-white font-mono mx-5 justify-center gap-2 items-center hidden md:flex">
        <ShoppingBagIcon className="h-6 w-6"></ShoppingBagIcon>
        <h2>Name</h2>
      </div>
      <div className=" flex gap-8 text-gray-100 text-xl mx-5 md:flex">
        <CustomLink to={"/home"}>Home</CustomLink>
        <CustomLink to={"/about"}>About</CustomLink>
        <CustomLink to={"/review"}>REVIEW</CustomLink>
        <CustomLink to={"/dashBoard"}>DASHBOARD</CustomLink>
        <CustomLink to={"/blog"}>BLOGS</CustomLink>
      </div>
    </div>
  );
};

export default Header;
