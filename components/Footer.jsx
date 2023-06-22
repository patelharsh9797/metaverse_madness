"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold md:text-[64px]">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex h-fit items-center gap-[12px] rounded-[32px] bg-[#25618b] py-4 px-6"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="h-[24px] w-[24px] object-contain"
          />
          <span className="text-[16px] font-normal">Enter Metaverse</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px] font-extrabold uppercase">Metaversus</h4>
          <p className="text-[14px] font-normal opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="h-[24px] w-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
