export function createObserver(targets) {
  console.log(targets);
  if (!targets) return;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  function showElement(entries, observer) {
    console.log("swag");
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        console.log("cool");
      }
    });
  }

  const observer = new IntersectionObserver(showElement, options);
  targets.forEach((element) => observer.observe(element));

  return observer;
}
