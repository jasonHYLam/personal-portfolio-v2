import styles from "./introduction.module.css";
export function Introduction() {
  return (
    <>
      <section className={styles.introduction}>
        <h2>Hello, I'm</h2>
        <p>
          <h1 className={`${styles.large} ${styles.accent}`}>Jason.</h1>
        </p>
        <p>
          <h1 className={styles.large}>Full-stack web developer </h1>based in
          London.
        </p>
        <p>
          I recently graduated from the University of Bath studying Civil
          Engineering.
        </p>
        <p>
          I've been learning full-stack web development with The Odin Project.
        </p>
        <p>
          I'm more experienced with JavaScript but I've recently picked up C#.
        </p>
      </section>
    </>
  );
}
