import aboutImage from "../../assets/about/aboutImage.png"; 
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import React from "react";
import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
         <img
        src={aboutImage}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
      />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3><br />
              <p>
               Frontend Developer focused on writing scalable, future-proof code. I take pride in building responsive sites that are as clean under the hood as they are polished on the surface, ensuring long-term maintainability and speed.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3><br />
              <p>
               I specialize in the 'behind-the-scenes' magic—creating the vital bridges (APIs) that connect data to the user, ensuring every interaction is snappy and reliable.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3><br />
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};