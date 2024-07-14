import "./App.css";
import { Introduction } from "./components/Introduction";
import { TechStack } from "./components/TechStack";
import { ProjectsList } from "./components/projects/ProjectsList";

function App() {
  return (
    <>
      <header></header>
      {/* Introduction */}
      <Introduction />
      {/* About me */}
      <section>
        <TechStack />
      </section>
      {/* Projects */}
      <section>
        <ProjectsList />
      </section>
      {/* Contact me */}
      <section>
        <p>I'd love to hear from you.</p>
        <form action=""></form>
      </section>
    </>
  );
}

export default App;
