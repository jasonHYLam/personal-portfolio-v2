import "./App.css";
import { Contact } from "./components/contact/Contact";
import { Introduction } from "./components/introduction/Introduction";
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
      <ProjectsList ref={projectsSectionRef} />
      <About ref={aboutSectionRef} />
      <Contact ref={contactSectionRef} />
    </>
  );
}

export default App;
