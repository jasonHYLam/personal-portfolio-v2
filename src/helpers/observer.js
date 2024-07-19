export function createObserver(targets) {
  console.log(targets);
  if (!targets) return;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function showElement(entries, observer) {
    entries.forEach((entry) => {
      let isShown = false;
      if (isShown) return;
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        isShown = true;
      }
    });
  }

  const observer = new IntersectionObserver(showElement, options);
  targets.forEach((element) => observer.observe(element));

  return observer;
}
