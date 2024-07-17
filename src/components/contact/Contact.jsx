import styles from "./contact.module.css";
import { EMAIL } from "../../helpers/constants";
import { GithubIcon } from "../icons/GithubIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { forwardRef } from "react";
export const Contact = forwardRef(function Contact({}, ref) {
  return (
    <>
      <section ref={ref} className={styles.contactSection}>
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
            <LinkedinIcon />
          </a>
          <a href={`mailto:${EMAIL}`}>
            <EmailIcon size="large" />
          </a>
        </section>
      </section>
    </>
  );
});
