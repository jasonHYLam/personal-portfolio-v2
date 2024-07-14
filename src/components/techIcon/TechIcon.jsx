import styles from "./techIcon.module.css";

export function TechIcon({ techIcon }) {
  return (
    <>
      <article className={styles.techIcon}>{techIcon}</article>
    </>
  );
}
