import styles from "./project.module.css";
import blueMessagingApp1 from "../../../assets/blueMessagingApp1.png";
import gitHubIcon from "../../../assets/github-mark.svg";
import openNewLinkIcon from "../../../assets/open-in-new.svg";

export function BlueMessagingApp() {
  return (
    <>
      <section className={styles.projectContainer}>
        <h2>Blue Messaging App</h2>
        <section className={styles.projectContents}>
          <img className={styles.projectImage} src={blueMessagingApp1} alt="" />
          <section className={styles.informationContainer}>
            <p>A messaging app based on Discord.</p>

            <h3>Features</h3>
            <ul>
              <li>Image uploads</li>
              <li>Creating chats and groupchats with invited friends</li>
              <li>Adding friends</li>
              <li>Testing APIs using SuperTest, MongoMemoryServer and Jest</li>
            </ul>
            <section>
              <a
                href="https://blue-messaging-app.netlify.app/login"
                target="_blank"
              >
                <img className={styles.linkIcon} src={openNewLinkIcon} alt="" />
              </a>
              <a
                href="https://github.com/jasonHYLam/TOP-messaging-app-client/"
                target="_blank"
              >
                Frontend repo
              </a>
              <a
                href="https://github.com/jasonHYLam/TOP-messaging-app-backend/"
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
