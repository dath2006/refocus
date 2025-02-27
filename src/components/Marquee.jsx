import { motion } from "motion/react";
import React from "react";

const Marquee = ({ images, direction }) => {
  return (
    <div className="flex w-full relative overflow-hidden">
      <motion.div
        initial={{ x: direction == "left" ? 0 : "-100%" }}
        animate={{ x: direction == "left" ? "-100%" : 0 }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="flex w-full flex-shrink-0 mb-10 "
      >
        {images.map((url) => (
          <img src={url} className="w-32 mr-20" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction == "left" ? "0" : "-100%" }}
        animate={{ x: direction == "left" ? "-100%" : "0" }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="flex w-full flex-shrink-0 mb-10"
      >
        {images.map((url) => (
          <img src={url} className="w-32 mr-20" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
