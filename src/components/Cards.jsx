import { motion } from "motion/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Cards = () => {
  return (
    <div className="w-full mt-40 pb-20">
      <div className="max-w-screen-xl mx-auto flex gap-2">
        <motion.div
          whileHover={{ padding: "6px" }}
          className="w-1/3 rounded-lg h-[27rem] bg-zinc-800"
        >
          <div className="flex justify-between p-5">
            <p className="font-regular text-md text-white ">Up Next: News</p>
            <FaArrowRight />
          </div>
          <div className="px-5 h-80">
            <h2 className="text-4xl">Insights and behind the scenes</h2>
          </div>
          <div className="px-5 ">
            <p className="text-zinc-400">Explore what drives our team.</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ padding: "6px" }}
          className="flex-1 rounded-lg h-[27rem] hover:bg-violet-500 bg-zinc-800"
        >
          <div className="flex justify-between p-5">
            <p className="font-regular text-md text-white ">Get In Touch</p>
            <FaArrowRight />
          </div>
          <div className="px-5 h-56">
            <h2 className="text-4xl">Let's get to it, together.</h2>
          </div>
          <div className="px-5">
            <h1 className="text-6xl font-semibold pb-8">Start a Project</h1>
            <span className="px-6 py-2 rounded-3xl text-white border-[1px] border-white ">
              Contact Us
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
