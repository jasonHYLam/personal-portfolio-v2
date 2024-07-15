import saturated1 from "../../../assets/saturated1.png";
import saturatedLogo from "../../../assets/SaturatedLogo.png";
import styles from "./project.module.css";

export function Saturated() {
  return (
    <>
      <h2>Saturated (Education art web app)</h2>

      <img className={styles.logo} src={saturatedLogo} alt="" />
      <section className={styles.projectContainer}>
        <img className={styles.projectImage} src={saturated1} alt="" />
        <section className={styles.informationContainer}>
          <section>
            <p>
              An educational art app to help artists improve their observational
              skills and expand their visual library.
            </p>

            <h3>Features</h3>
            <ul>
              <li>Image uploads</li>
              <li>Image analysis</li>
              <li>Creating notes</li>
              <li>Tagging notes on image</li>
            </ul>
          </section>
          <section>
            <a href="https://saturated.netlify.app/login" target="_blank">
              Live link
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
    </>
  );
}
