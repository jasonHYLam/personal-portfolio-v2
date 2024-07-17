import styles from "./about.module.css";
import { forwardRef } from "react";
import { TechStack } from "../techStack/TechStack";

export const About = forwardRef(function About({}, ref) {
  return (
    <>
      <section className={styles.aboutSection} ref={ref}>
        <h1>About me</h1>
        <p>
          I'm a web developer based in London, and have recently graduated with
          an upper 2:1 Bachelor's Degree in Civil Engineering from the
          University of Bath.
        </p>
        <p>
          I discovered full-stack web-development through The Odin Project, have
          a strong growth mindset having developed many web applications and
          becoming comfortable with previously unfamiliar technologies.
        </p>
        <p>
          I mainly use React and TypeScript for frontend. After predominantly
          using JavaScript and NodeJS for backend development, I took the
          opportunity to learn C# and .NET to build my educational web app.
        </p>
        <TechStack />
      </section>
    </>
  );
});
