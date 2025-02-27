import { motion } from "motion/react";
import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ name }) {
  return (
    <div className="w-36  h-10 bg-zinc-200 py-1 px-4 flex items-center justify-between text-black rounded-full overflow-hidden">
      <motion.div
        whileHover={{ translateY: "36%" }}
        className="flex flex-wrap gap-y-2"
      >
        <span className="font-regular font-medium ">{name}</span>
        <br></br>
        <span className="font-regular font-medium ">{name}</span>
        <br></br>
        <span className="font-regular font-medium ">{name}</span>
        <br></br>
      </motion.div>

      <IoIosReturnRight className="text-4xl" />
    </div>
  );
}

export default Button;
