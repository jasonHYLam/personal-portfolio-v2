import styles from "./projectsList.module.css";
import { forwardRef } from "react";
import { BlueMessagingApp } from "./project/BlueMessagingApp";
import { Saturated } from "./project/Saturated";
import { Tabasco } from "./project/Tabasco";

export const ProjectsList = forwardRef(function ProjectsList({}, ref) {
  return (
    <>
      <section ref={ref} className={styles.projectsListSection}>
        <h1>Projects</h1>
        <section>
          <Saturated />
          <Tabasco />
          <BlueMessagingApp />
        </section>
      </section>
    </>
  );
});
