import styles from "./project.module.css";
import blueMessagingApp1 from "../../../assets/blueMessagingApp1.png";
import gitHubIcon from "../../../assets/github-mark.svg";
import { OpenInNewIcon } from "../../icons/OpenInNewIcon";

export function BlueMessagingApp() {
  return (
    <>
      <section className={styles.projectContainer}>
        <h2>Blue Messaging App</h2>
        <section className={styles.projectContents}>
          <img className={styles.projectImage} src={blueMessagingApp1} alt="" />
          <section className={styles.informationContainer}>
            <p>
              A messaging app based on Discord. Create an account, add your
              friends, and invite them to groupchats. You can send messages and
              images. APIs have been tested with SuperTest, MongoMemoryServer
              and Jest.
            </p>

            <section>
              <a
                href="https://blue-messaging-app.netlify.app/login"
                target="_blank"
              >
                <svg />
                <OpenInNewIcon />
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
