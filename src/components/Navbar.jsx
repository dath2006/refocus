import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg justify-between items-center mx-auto flex flex-wrap h-20 border-b-2 border-zinc-700">
      <div className="flex items-center">
        <img
          src="https://cdn.brandfetch.io/idZgdi6uSQ/theme/dark/logo.svg?c=1bfwsmEH20zzEfSNTed"
          className="h-6"
        ></img>
        <p className="ml-3 mr-24">Refokus</p>
        <div>
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => {
            return index == 3 ? (
              <span className=" text-zinc-400 mr-7">|</span>
            ) : (
              <a href="#" className="font-normal text-white mr-7">
                {index === 1 && (
                  <span className="inline-block w-1 h-1 text-green-600"></span>
                )}
                {elem}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex items-center">
        <Button name="Get Started" />
      </div>
    </div>
  );
};

export default Navbar;
