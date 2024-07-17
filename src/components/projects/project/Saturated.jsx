import saturated1 from "../../../assets/saturated1.png";
import saturatedLogo from "../../../assets/SaturatedLogo.png";
import styles from "./project.module.css";
import { OpenInNewIcon } from "../../icons/OpenInNewIcon";

export function Saturated() {
  return (
    <>
      <section className={styles.projectContainer}>
        <h3 className={styles.subtext}>Featured project!</h3>
        <h2>Saturated (Education art web app)</h2>

        <a href="https://saturated.netlify.app/login" target="_blank">
          <img className={styles.logo} src={saturatedLogo} alt="" />
        </a>
        <section className={styles.projectContents}>
          <img className={styles.projectImage} src={saturated1} alt="" />
          <section className={styles.informationContainer}>
            <section>
              <p>
                An educational art web app to help artists improve their
                observational skills and expand their visual library. It
                features image analysis via Canvas API, creating notes with the
                option to guess colors, and the ability to tag notes onto the
                image.
              </p>
              <p>
                I built this after being frustrated with existing services for
                doing art studies, including Notion and Photoshop. It's designed
                to be simple to create and read notes on top of images, and a
                platform to access and keep learning from your studies, wherever
                you are.
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
