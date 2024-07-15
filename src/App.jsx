import "./App.css";
import { Introduction } from "./components/Introduction";
import { TechStack } from "./components/TechStack";
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
      <section>
        <p>I'd love to hear from you.</p>
        <a href="https://github.com/jasonHYLam" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jason-lam-855681194/"
          target="_blank"
        >
          LinkedIn
        </a>
        <form action=""></form>
      </section>
    </>
  );
}

export default App;
