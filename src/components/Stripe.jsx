import React from "react";

const Stripe = ({ url, num }) => {
  return (
    <div className="flex items-center p-5 justify-between w-96 border-[1px] h-18 border-zinc-600">
      <img className="h-7" src={url}></img>
      <span className="text-sm font-bold">{num}</span>
    </div>
  );
};

export default Stripe;
