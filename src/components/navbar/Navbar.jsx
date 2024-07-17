import styles from "./navbar.module.css";

export function Navbar({
  aboutSectionRef,
  projectsSectionRef,
  contactSectionRef,
}) {
  return (
    <>
      <nav className={styles.navbar}>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </nav>
    </>
  );
}
