"use client";

"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import styles from "../styles";

import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center " />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <img src="/map.png" alt="map" className="h-full w-full object-cover" />

        <div className="absolute bottom-20  right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="/people-01.png" alt="people" className="h-full w-full" />
        </div>

        <div className="absolute top-10  left-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="/people-02.png" alt="people" className="h-full w-full" />
        </div>

        <div className="absolute top-1/2  left-[45%] h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="/people-03.png" alt="people" className="h-full w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
