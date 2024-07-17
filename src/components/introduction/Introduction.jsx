import styles from "./introduction.module.css";
export function Introduction() {
  return (
    <>
      <section className={styles.introduction}>
        <h2>Hello, I'm</h2>
        <h1 className={`${styles.large} ${styles.accent}`}>Jason Lam.</h1>
        <h1 className={`${styles.large} ${styles.bold}`}>
          Full-stack web developer{" "}
        </h1>
        <p>based in London.</p>

        <h2 className={styles.centerAlign}>Check out the things I've done!</h2>
      </section>
    </>
  );
}
