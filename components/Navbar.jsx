"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />

    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search icon"
        className="h-[24px] w-[24px] object-contain"
      />

      <h2 className="text-[24px] font-extrabold uppercase leading-[30px]">
        Metaversus
      </h2>

      <img
        src="/menu.svg"
        alt="menu icon"
        className="h-[24px] w-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
