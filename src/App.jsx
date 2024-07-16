import "./App.css";
import { Contact } from "./components/Contact";
import { Introduction } from "./components/introduction/Introduction";
import { TechStack } from "./components/techStack/TechStack";
import { ProjectsList } from "./components/projects/ProjectsList";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Introduction />
      <TechStack />
      <ProjectsList />
      <Contact />
    </>
  );
}

export default App;
