import styles from "./techStack.module.css";
import { TechIcon } from "../techIcon/TechIcon";

export function TechStack() {
  return (
    <>
      <section className={styles.techStackSection}>
        <h2>My current tech stack</h2>
        <section className={styles.techStack}>
          {/* JavaScript */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              }
            />
            <p className={styles.techTitle}>JavaScript</p>
          </article>

          {/* TypeScript */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              }
            />
            <p className={styles.techTitle}>TypeScript</p>
          </article>

          {/* HTML */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              }
            />
            <p className={styles.techTitle}>HTML</p>
          </article>

          {/* CSS */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
              }
            />
            <p className={styles.techTitle}>CSS</p>
          </article>

          {/* React */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              }
            />
            <p className={styles.techTitle}>React</p>
          </article>

          {/* NodeJS */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              }
            />
            <p className={styles.techTitle}>NodeJS</p>
          </article>

          {/* ExpressJS */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
              }
            />
            <p className={styles.techTitle}>Express</p>
          </article>

          {/* C# */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
              }
            />
            <p className={styles.techTitle}>C#</p>
          </article>

          {/* .NET */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg" />
              }
            />
            <p className={styles.techTitle}>.NET</p>
          </article>

          {/* MongoDB */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
              }
            />
            <p className={styles.techTitle}>MongoDB</p>
          </article>

          {/* PostgreSQL */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
              }
            />
            <p className={styles.techTitle}>PostgreSQL</p>
          </article>

          {/* Azure */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg" />
              }
            />
            <p className={styles.techTitle}>Azure</p>
          </article>

          {/* Jest */}
          <article className={styles.tech}>
            <TechIcon
              techIcon={
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
              }
            />
            <p className={styles.techTitle}>Jest</p>
          </article>
        </section>
      </section>
    </>
  );
}
