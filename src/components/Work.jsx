import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  let [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "55%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    hideNshow(Math.floor(latest * 100));
  });

  function hideNshow(scrollval) {
    const imgmanu = (idx) => {
      setImages((val) => {
        val.map((ele, i) =>
          i <= idx ? (ele.isActive = true) : (ele.isActive = false)
        );
        return [...val];
      });
    };
    switch (scrollval) {
      case 0:
        imgmanu(-1);
        break;
      case 1:
        imgmanu(0);
        break;
      case 3:
        imgmanu(1);
        break;
      case 5:
        imgmanu(2);
        break;
      case 6:
        imgmanu(3);
        break;
      case 7:
        imgmanu(4);
        break;
      case 8:
        imgmanu(5);
        break;
      case 9:
        imgmanu(6);
        break;
    }
  }

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto leading-none  text-center">
        <h1 className="font-medium pointer-events-none text-[30vw]">work</h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (elem) =>
              elem.isActive && (
                <img
                  className="absolute w-60 rounded-lg -translate-x-1/2 "
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
