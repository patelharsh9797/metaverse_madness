"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 1)}
    className={`relative ${
      active === id
        ? "flex-[10] shadow-md lg:flex-[3.5]"
        : "flex-[2] lg:flex-[0.5]"
    } flex h-[1200px] min-w-[170px] cursor-pointer items-center justify-center overflow-hidden rounded-[24px] transition-[flex] duration-[1s] ease-out-flex md:h-[600px]`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className={`absolute h-full w-full  object-cover transition-opacity duration-[1s] ${
        active !== id ? "opacity-50" : "opacity-100"
      }`}
    />

    {active !== id ? (
      <h3 className="absolute text-[18px] font-semibold sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="absolute bottom-0 w-full flex-col justify-start bg-[rgba(0,0,0,0.5)] p-8"
      >
        <div
          className={`${styles.flexCenter} glassmorphism mb-[16px] h-[60px] w-[60px] rounded-[24px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="h-1/2 w-1/2 object-contain"
          />
        </div>
        <p className="text-[16px] font-normal uppercase leading-[20px]">
          Enter the metaverse
        </p>
        <h2 className="mt-[24px] text-[24px] font-semibold sm:text-[32px]">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
);

export default ExploreCard;
