import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
const Products = () => {
  let [pos, setPos] = useState(0);
  let products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      get: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      get: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      get: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      get: true,
      case: true,
    },
  ];

  const handlePos = (p) => {
    setPos(p * 20);
  };
  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product elem={elem} handlePos={handlePos} index={index} />
      ))}
      <div className="absolute w-full h-full top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
          className="absolute h-[20rem] w-[28rem] translate-y-[60rem] bg-white left-[27%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video autoPlay muted loop>
              <source src="/videos/1.mp4" type="video/mp4"></source>
            </video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full "
          >
            <video autoPlay muted loop>
              <source src="/videos/2.webm" type="video/webm"></source>
            </video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video autoPlay muted loop>
              <source src="/videos/3.webm" type="video/webm"></source>
            </video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video autoPlay muted loop>
              <source src="/videos/4.webm" type="video/webm"></source>
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
