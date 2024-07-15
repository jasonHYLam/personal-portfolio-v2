import styles from "./project.module.css";
import tabascoLogo from "../../../assets/TabascoLogo.png";
import tabasco1 from "../../../assets/tabasco1.png";
import openNewLinkIcon from "../../../assets/open-in-new.svg";

export function Tabasco() {
  return (
    <>
      <h2>Tabasco (social media site)</h2>
      <img className={styles.logo} src={tabascoLogo} alt="" />
      <section className={styles.projectContainer}>
        <img className={styles.projectImage} src={tabasco1} alt="" />
        <section>
          <p>A social media site based on Twitter and Pixiv.</p>

          <h3>Features</h3>
          <ul>
            <li>Image uploads</li>
            <li>Creating/liking posts</li>
            <li>Adding friends</li>
            <li>Testing APIs with SuperTest, MongoMemoryServer and Jest</li>
          </ul>
          <section className={styles.informationContainer}>
            <a href="https://tabasco.netlify.app/login" target="_blank">
              <img src={openNewLinkIcon} alt="" />
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
    </>
  );
}
