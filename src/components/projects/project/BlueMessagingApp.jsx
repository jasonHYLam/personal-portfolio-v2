import styles from "./project.module.css";

export function BlueMessagingApp() {
  return (
    <>
      <h2>Blue Messaging App</h2>
      <section className={styles.projectContainer}></section>

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
            Live link
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
    </>
  );
}
