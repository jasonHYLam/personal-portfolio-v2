import styles from "./contact.module.css";
import { EMAIL } from "../../helpers/constants";
import { GithubIcon } from "../icons/GithubIcon";
export function Contact() {
  return (
    <>
      <section>
        <h1>Contact</h1>
        <p>I'd love to hear from you, do get in touch!</p>
        <section className={styles.links}>
          <a href="https://github.com/jasonHYLam" target="_blank">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jason-lam-855681194/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </section>
      </section>
    </>
  );
}
