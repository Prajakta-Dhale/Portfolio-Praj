import React from "react";
import heroImage from "../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prajakta Dhale</h1>
        <p className={styles.description}>
         "I turn ideas into full-stack reality. Using React for the 'how it looks' and NodeJS for the 'how it works,' I build landing pages and APIs that are fast, responsive, and reliable. Looking to contribute to a team that values innovation and clean architecture."
        </p>
        <a href="mailto:dhaleprajakta10@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};