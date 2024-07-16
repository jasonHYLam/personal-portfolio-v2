import styles from "./introduction.module.css";
export function Introduction() {
  return (
    <>
      <section className={styles.introduction}>
        <h2>Hello</h2>
        <p>
          I'm <h1 className={styles.large}>Jason</h1>, a{" "}
          <h1 className={styles.large}>full-stack web developer </h1>based in
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
