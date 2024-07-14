import "./App.css";
import { TechStack } from "./components/TechStack";
import { ProjectsList } from "./components/projects/ProjectsList";

function App() {
  return (
    <>
      <header></header>
      {/* Introduction */}
      <section></section>
      {/* About me */}
      <section>
        <p>I'm Jason, full-stack web dev.</p>
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
