import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let’s build the future together</h2>
        <p>Whether you have a question or just want to talk about <strong style={{color:'white'}}>React, Node, or Design Systems</strong> my inbox is always open.</p>
      </div>
      
      <div className={styles.contactLinks}>
        <a href="mailto:prajakta@email.com" className={styles.linkCard}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <div className={styles.linkText}>
            <span>Drop a Line</span>
            <p>dhaleprajakta10@email.com</p>
          </div>
        </a>

        <a href="https://linkedin.com/in/prajakta" className={styles.linkCard}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <div className={styles.linkText}>
            <span>Connect</span>
            <p>https://www.linkedin.com/in/prajakta-dhale/</p>
          </div>
        </a>

        <a href="https://github.com/prajakta" className={styles.linkCard}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <div className={styles.linkText}>
            <span>View Source</span>
            <p>https://github.com/Prajakta-Dhale</p>
          </div>
        </a>
      </div>
    </footer>
  );
};