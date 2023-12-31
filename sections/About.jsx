"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <div className="gradient-03 z-0 mt-[50px]" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} relative z-10 mx-auto ${styles.flexCenter} flex-col `}
    >
      <TypingText
        title="| About Metaversus"
        textStyles="text-center opacity-30"
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]"
      >
        <span className="font-extrabold text-white">Metaverse </span>
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse{" "}
        </span>
        of today, using only{" "}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down icon"
        className="w-[18px mt-[28px] h-[28px] object-contain"
      />
    </motion.div>
  </section>
);

export default About;
