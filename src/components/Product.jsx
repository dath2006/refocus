import React from "react";
import Button from "./Button";

const Product = ({ elem, handlePos, index }) => {
  return (
    <div className="w-full h-[20rem]">
      <div
        onMouseEnter={() => {
          handlePos(index);
        }}
        className="max-w-screen-xl flex justify-between mx-auto px-20 py-20"
      >
        <h1 className="text-5xl font-medium">{elem.title}</h1>
        <div className="w-1/3">
          <p className="mb-8">{elem.description}</p>
          <div className="flex gap-8">
            {elem.get && <Button name="Get Started" />}
            {elem.case && <Button name="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
