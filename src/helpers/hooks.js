import { useEffect } from "react";
import { createObserver } from "./observer";

export function useObserver(targets) {
  // Note to self: input should be ref. Obtain ref.current within useEffect, as it occurs after initial render.
  useEffect(() => {
    const domElements = targets.map((target) => target.current);
    console.log(domElements);
    createObserver(domElements);
  }, []);
}
