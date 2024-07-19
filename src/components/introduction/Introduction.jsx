import { forwardRef } from "react";
import styles from "./introduction.module.css";
export const Introduction = forwardRef(function Introduction({}, ref) {
  return (
    <>
      <section ref={ref} className={styles.introduction}>
        <h2>Hello, I'm</h2>
        <h1 className={`${styles.large} ${styles.accent}`}>Jason Lam.</h1>
        <h1 className={`${styles.large} ${styles.bold}`}>
          Full-stack web developer
        </h1>

        <h2 className={styles.centerAlign}>Check out the things I've done!</h2>
      </section>
    </>
  );
});
