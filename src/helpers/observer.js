export function createObserver(target) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(() => {}, options);
  observer.observe(target);
}
