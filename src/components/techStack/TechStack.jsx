import styles from "./techStack.module.css";
import { TechIcon } from "../techIcon/TechIcon";

export function TechStack() {
  return (
    <>
      <p>My current tech stack</p>
      {/* JavaScript */}
      <section className={styles.techStack}>
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            }
          />
          <p>JavaScript</p>
        </article>

        {/* TypeScript */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            }
          />
          <p>TypeScript</p>
        </article>

        {/* HTML */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            }
          />
          <p>HTML</p>
        </article>

        {/* CSS */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
            }
          />
          <p>CSS</p>
        </article>

        {/* React */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            }
          />
          <p>React</p>
        </article>

        {/* NodeJS */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            }
          />
          <p>NodeJS</p>
        </article>

        {/* ExpressJS */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            }
          />
          <p>Express</p>
        </article>

        {/* C# */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
            }
          />
          <p>C#</p>
        </article>

        {/* .NET */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg" />
            }
          />
          <p>.NET</p>
        </article>

        {/* MongoDB */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
            }
          />
          <p>MongoDB</p>
        </article>

        {/* PostgreSQL */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            }
          />
          <p>PostgreSQL</p>
        </article>

        {/* Azure */}
        <article>
          <TechIcon
            techIcon={
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg" />
            }
          />
          <p>Azure</p>
        </article>
      </section>
    </>
  );
}
