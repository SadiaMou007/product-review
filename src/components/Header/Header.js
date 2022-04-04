import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-purple-900 sticky top-0  p-3 z-10">
      <div className=" flex gap-8 justify-center items-center text-gray-100 md:gap-4 text-xl ">
        <CustomLink to={"/home"}>HOME</CustomLink>
        <CustomLink to={"/review"}>REVIEW</CustomLink>
        <CustomLink to={"/dashBoard"}>DASHBOARD</CustomLink>
        <CustomLink to={"/blog"}>BLOGS</CustomLink>
        <CustomLink to={"/about"}>ABOUT</CustomLink>
      </div>
    </div>
  );
};

export default Header;
