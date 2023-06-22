"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles";

import { NewFeatures, TitleText, TypingText } from "../components";

import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-[0.95] flex-col justify-center"
      >
        <TypingText title="| What's New?" />

        <TitleText title={<>What's new about Metaversus?</>} />

        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/whats-new.png"
          alt="whats new!"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
