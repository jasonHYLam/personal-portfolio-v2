import "./App.css";
import { Contact } from "./components/contact/Contact";
import { Introduction } from "./components/introduction/Introduction";
import { TechStack } from "./components/techStack/TechStack";
import { ProjectsList } from "./components/projects/ProjectsList";
import { Navbar } from "./components/navbar/Navbar";
import { useRef } from "react";
import { About } from "./components/about/About";

function App() {
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  return (
    <>
      <Navbar
        aboutSectionRef={aboutSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />

      <Introduction />
      <TechStack />
      <ProjectsList ref={projectsSectionRef} />
      <About />
      <Contact ref={contactSectionRef} />
    </>
  );
}

export default App;
