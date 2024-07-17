import { forwardRef } from "react";
import { BlueMessagingApp } from "./project/BlueMessagingApp";
import { Saturated } from "./project/Saturated";
import { Tabasco } from "./project/Tabasco";

export const ProjectsList = forwardRef(function ProjectsList({}, ref) {
  return (
    <>
      <h1 ref={ref}>Projects</h1>
      <section>
        <Saturated />
        <Tabasco />
        <BlueMessagingApp />
      </section>
    </>
  );
});
