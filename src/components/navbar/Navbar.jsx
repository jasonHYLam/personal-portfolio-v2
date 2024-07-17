import styles from "./navbar.module.css";

export function Navbar({
  aboutSectionRef,
  projectsSectionRef,
  contactSectionRef,
}) {
  return (
    <>
      <nav className={styles.navbar}>
        <p onClick={() => projectsSectionRef.current.scrollIntoView()}>
          1. Projects
        </p>
        <p onClick={() => aboutSectionRef.current.scrollIntoView()}>2. About</p>
        <p onClick={() => contactSectionRef.current.scrollIntoView()}>
          3. Contact
        </p>
      </nav>
    </>
  );
}
