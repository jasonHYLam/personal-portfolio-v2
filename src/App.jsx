// import "./App.css";
import { Contact } from "./components/Contact";
import { Introduction } from "./components/Introduction";
import { TechStack } from "./components/techStack/TechStack";
import { ProjectsList } from "./components/projects/ProjectsList";

function App() {
  return (
    <>
      <header></header>
      {/* Introduction */}
      {/* About me */}
      <Introduction />
      <TechStack />
      {/* Projects */}
      <ProjectsList />
      {/* Contact me */}
      <Contact />
    </>
  );
}

export default App;
