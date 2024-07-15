import { EMAIL } from "../helpers/constants";
export function Contact() {
  return (
    <>
      <section>
        <p>I'd love to hear from you, do get in touch!</p>
        <a href="https://github.com/jasonHYLam" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jason-lam-855681194/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href={`mailto:${EMAIL}`}>Email</a>
      </section>
    </>
  );
}
