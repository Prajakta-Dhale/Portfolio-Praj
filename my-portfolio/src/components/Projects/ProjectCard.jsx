import React from "react";
import styles from "./ProjectCard.module.css";
import project from "../../assets/projects/project.png";
import healthcare from "../../assets/projects/healthcare.png";


const projects = {
  "project.png": project,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={projects.image} alt={project.title} />
      </div>
      
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={source} className={styles.linkSecondary} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};