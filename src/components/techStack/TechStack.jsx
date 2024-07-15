import styles from "./techStack.module.css";
import { TechIcon } from "../techIcon/TechIcon";

export function TechStack() {
  return (
    <>
      <p>Things I've used</p>
      {/* JavaScript */}
      <section className={styles.techStack}>
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          }
        />

        {/* TypeScript */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          }
        />

        {/* HTML */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          }
        />

        {/* CSS */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
          }
        />

        {/* React */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          }
        />

        {/* NodeJS */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
          }
        />

        {/* ExpressJS */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
          }
        />

        {/* C# */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
          }
        />

        {/* .NET */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg" />
          }
        />

        {/* MongoDB */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
          }
        />

        {/* PostgreSQL */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
          }
        />

        {/* Azure */}
        <TechIcon
          techIcon={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg" />
          }
        />
      </section>
    </>
  );
}
