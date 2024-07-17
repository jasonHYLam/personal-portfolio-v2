import { forwardRef } from "react";
import { TechStack } from "../techStack/TechStack";

export const About = forwardRef(function About({}, ref) {
  return (
    <>
      <section ref={ref}>
        <h1>About me</h1>
        <p>
          I'm based in London. I've recently graduated with an upper 2:1
          Bachelor's Degree in Civil Engineering from the University of Bath. I
          discovered full-stack web-development through The Odin Project. I have
          a strong growth mindset having developed many web applications and
          becoming comfortable with previously unfamiliar technologies. I mainly
          use React and TypeScript for frontend development. After predominantly
          using JavaScript for backend development, I took the opportunity to
          learn C# .NET to build my educational web app.
        </p>
        <TechStack />
      </section>
    </>
  );
});
