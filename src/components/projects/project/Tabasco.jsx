import styles from "./project.module.css";
import tabascoLogo from "../../../assets/TabascoLogo.png";
import tabasco1 from "../../../assets/tabasco1.png";
import { OpenInNewIcon } from "../../icons/OpenInNewIcon";

export function Tabasco() {
  return (
    <>
      <section className={styles.projectContainer}>
        <h2>Tabasco (social media site)</h2>
        <section className={styles.projectContents}>
          <a href="https://tabasco.netlify.app/" target="_blank">
            <img className={styles.logo} src={tabascoLogo} alt="" />
          </a>

          <img className={styles.projectImage} src={tabasco1} alt="" />
          <section className={styles.informationContainer}>
            <p>
              A social media / art post site based on Twitter and Pixiv. Users
              can create posts with image uploads, follow other users and view
              their posts and leave comments. Users can like and bookmark posts,
              as well as create additional tags. Features API testing with
              SuperTest, MongoMemoryServer and Jest, and frontend tests with
              Vitest.
            </p>

            <section className={styles.techStack}>
              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>NodeJS</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PassportJS</span>
            </section>

            <section className={styles.links}>
              <a href="https://tabasco.netlify.app/" target="_blank">
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
