import saturated1 from "../../../assets/saturated1.png";

export function Saturated() {
  return (
    <>
      <h2>Saturated</h2>
      <p>
        An educational art app to help artists improve their observational
        skills and expand their visual library.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Image uploads</li>
        <li>Image analysis</li>
        <li>Creating notes</li>
        <li>Tagging notes on image</li>
      </ul>

      <img src={saturated1} alt="" />
      <a href="https://saturated.netlify.app/login">Live link</a>
      <a href="https://github.com/jasonHYLam/saturated-frontend/">
        Frontend repo
      </a>
      <a href="https://github.com/jasonHYLam/saturated-backend/">
        Backend repo
      </a>
    </>
  );
}
