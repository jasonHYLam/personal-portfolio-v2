import "./App.css";
import { TechStack } from "./components/TechStack";

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
        <article>
          <p>Saturated</p>
          <p>
            An educational art app to help artists improve their observation
            skills and expand their visual library.
          </p>
        </article>
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
