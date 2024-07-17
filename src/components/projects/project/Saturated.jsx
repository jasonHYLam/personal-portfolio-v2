import saturated4 from "../../../assets/saturated4.png";

import saturatedLogo from "../../../assets/SaturatedLogo.png";
import styles from "./project.module.css";
import { OpenInNewIcon } from "../../icons/OpenInNewIcon";

export function Saturated() {
  return (
    <>
      <section className={styles.projectContainer}>
        <section className={styles.titleContainer}>
          <h3 className={styles.subtext}>Featured project!</h3>
          <h2>
            Saturated{" "}
            <span className={styles.subtext}>(education art web app)</span>{" "}
          </h2>

          <a href="https://saturated.netlify.app/login" target="_blank">
            <img className={styles.logo} src={saturatedLogo} alt="" />
          </a>
        </section>
        <section className={styles.projectContents}>
          <img className={styles.projectImage} src={saturated4} alt="" />
          <section className={styles.informationContainer}>
            <section className={styles.description}>
              <p>
                An educational art web app to help artists improve their
                observational skills and expand their visual library. It
                features image analysis via Canvas API, creating notes with the
                option to guess colors, and the functionality to tag notes onto
                the image.
              </p>
              <p>
                As a hobby artist, I built this after being frustrated with
                existing services for doing art studies, including Notion and
                Photoshop. Some issues I faced included a lack of image
                interactivity, being clunky to write notes and impossible to
                access outside of the software. I solved these problems by
                developing Saturated; it's designed to be simple to create and
                read notes on top of images, as well as acting as a platform to
                access and keep learning from your studies, from the web
                wherever you are.
              </p>
              <p>Check it out if you want to upgrade your art skills!</p>
            </section>

            <section className={styles.techStack}>
              <span>React</span>
              <span>TypeScript</span>
              <span>CanvasAPI</span>
              <span>C#</span>
              <span>ASP.NET</span>
              <span>PostgreSQL</span>
              <span>Azure</span>
            </section>

            <section className={styles.links}>
              <a href="https://saturated.netlify.app/login" target="_blank">
                <OpenInNewIcon />
              </a>
              <a
                href="https://github.com/jasonHYLam/saturated-frontend/"
                target="_blank"
              >
                Frontend repo
              </a>
              <a
                href="https://github.com/jasonHYLam/saturated-backend/"
                target="_blank"
              >
                Backend repo
              </a>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
