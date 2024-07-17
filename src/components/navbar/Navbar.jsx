import styles from "./navbar.module.css";

export function Navbar({
  aboutSectionRef,
  projectsSectionRef,
  contactSectionRef,
}) {
  return (
    <>
      <nav className={styles.navbar}>
        <p onClick={() => aboutSectionRef.current.scrollIntoView()}>About</p>
        <p onClick={() => projectsSectionRef.current.scrollIntoView()}>
          Projects
        </p>
        <p onClick={() => contactSectionRef.current.scrollIntoView()}>
          Contact
        </p>
      </nav>
    </>
  );
}
