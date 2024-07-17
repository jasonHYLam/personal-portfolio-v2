import styles from "./navbar.module.css";
import resume from "../../assets/jason_lam_resume.pdf";

export function Navbar({
  aboutSectionRef,
  projectsSectionRef,
  contactSectionRef,
}) {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <p onClick={() => projectsSectionRef.current.scrollIntoView()}>
            1. Projects
          </p>
          <p onClick={() => aboutSectionRef.current.scrollIntoView()}>
            2. About
          </p>
          <p onClick={() => contactSectionRef.current.scrollIntoView()}>
            3. Contact
          </p>

          <button>
            <a href={resume} target="_blank">
              Resume
            </a>
          </button>
        </nav>
      </header>
    </>
  );
}
