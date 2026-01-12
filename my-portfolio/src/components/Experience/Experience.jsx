import React from "react";
import styles from "./Experience.module.css";

import html from "../../assets/skills/html.png";
import cssicon from "../../assets/skills/cssicon.png";
import react from "../../assets/skills/react.png";
import nodejs from "../../assets/skills/nodejs.png";
import js from "../../assets/skills/js.png";
import mysql from "../../assets/skills/mysql.png";
import figma from "../../assets/skills/figma.png";


export const Experience = () => {
  const skills = [
    { title: "HTML", image: html},
    { title: "CSS", image: cssicon },
    { title: "React", image: react },
    { title: "Node.js", image: nodejs },
    { title: "JavaScript", image: js },
    { title: "MySQL", image: mysql },
    { title: "Figma", image: figma },

  ];

  return (
    <section className={styles.container} id="experience">
      <div className={styles.header}>
        <h2 className={styles.title}>Expertise</h2>
        <p className={styles.subtitle}>
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.imageWrapper}>
                <img src={skill.image} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};