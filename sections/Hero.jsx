"use client";

import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../utils/motion";
import styles from "../styles";

const Hero = () => (
  <section className={`${styles.yPaddings} pl- pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex items-center justify-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="relative -mt-[12px] w-full md:-mt-[20px]"
      >
        <div className="hero-gradient absolute -top-[30px] z-[0] h-[300px] w-full rounded-tl-[140px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="relative -top-[20px] z-10 h-[350px] w-full rounded-tl-[140px] object-cover sm:h-[500px] md:-top-[50px]"
        />

        <a href="">
          <motion.div
            variants={zoomIn(1.4, 1)}
            className="relative z-10 -mt-[80px] flex w-full justify-end pr-[40px] md:-mt-[125px]"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]"
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
