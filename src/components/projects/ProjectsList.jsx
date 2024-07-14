import { BlueMessagingApp } from "./project/BlueMessagingApp";
import { Saturated } from "./project/Saturated";
import { Tabasco } from "./project/Tabasco";

export function ProjectsList() {
  return (
    <>
      <h1>Projects</h1>
      <Saturated />
      <Tabasco />
      <BlueMessagingApp />
    </>
  );
}
