import styles from "./project.module.css";
import tabascoLogo from "../../../assets/TabascoLogo.png";
import tabasco1 from "../../../assets/tabasco1.png";
import openNewLinkIcon from "../../../assets/open-in-new.svg";
import { OpenInNewIcon } from "../../icons/OpenInNewIcon";

export function Tabasco() {
  return (
    <>
      <section className={styles.projectContainer}>
        <h2>Tabasco (social media site)</h2>
        <section className={styles.projectContents}>
          <img className={styles.logo} src={tabascoLogo} alt="" />
          <img className={styles.projectImage} src={tabasco1} alt="" />
          <section className={styles.informationContainer}>
            <p>A social media site based on Twitter and Pixiv.</p>

            <h3>Features</h3>
            <ul>
              <li>Image uploads</li>
              <li>Creating/liking posts</li>
              <li>Adding friends</li>
              <li>Testing APIs with SuperTest, MongoMemoryServer and Jest</li>
            </ul>
            <section>
              <a href="https://tabasco.netlify.app/login" target="_blank">
                <OpenInNewIcon />
              </a>
              <a href="https://github.com/jasonHYLam/Odinbook/" target="_blank">
                Frontend repo
              </a>
              <a
                href="https://github.com/jasonHYLam/Odinbook-Server/"
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
