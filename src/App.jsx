import "./App.css";
import { Contact } from "./components/contact/Contact";
import { Introduction } from "./components/introduction/Introduction";
import { ProjectsList } from "./components/projects/ProjectsList";
import { Navbar } from "./components/navbar/Navbar";
import { useRef } from "react";
import { About } from "./components/about/About";
import { useObserver } from "./helpers/hooks";

function App() {
  const navbarRef = useRef(null);
  const introductionSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useObserver([aboutSectionRef, projectsSectionRef, contactSectionRef]);
  return (
    <>
      <Navbar
        ref={navbarRef}
        aboutSectionRef={aboutSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />

      <Introduction ref={introductionSectionRef} />
      <ProjectsList ref={projectsSectionRef} />
      <About ref={aboutSectionRef} />
      <Contact ref={contactSectionRef} />
    </>
  );
}

export default App;
