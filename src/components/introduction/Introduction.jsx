import styles from "./introduction.module.css";
export function Introduction() {
  return (
    <>
      <section className={styles.introduction}>
        <h2>Hello, I'm</h2>
        <h1 className={`${styles.large} ${styles.accent}`}>Jason.</h1>
        <p>
          <h1 className={`${styles.large} ${styles.bold}`}>
            Full-stack web developer{" "}
          </h1>
          based in London.
        </p>
        <p className={styles.textbox}>
          I recently graduated from the University of Bath studying Civil
          Engineering. I've been learning full-stack web development with The
          Odin Project. I'm more experienced with JavaScript but I've recently
          picked up C#.
        </p>
        <p>Check out what I've done!</p>
      </section>
    </>
  );
}
