import { forwardRef } from "react";
import { BlueMessagingApp } from "./project/BlueMessagingApp";
import { Saturated } from "./project/Saturated";
import { Tabasco } from "./project/Tabasco";

// I think I need to convert this into forwardRef.
// Will need to convert the projects to use useImperativeHandle
// But how do i forward multiple refs?
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
