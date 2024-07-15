import tabascoLogo from "../../../assets/TabascoLogo.png";

export function Tabasco() {
  return (
    <>
      <img src={tabascoLogo} alt="" />
      <h2>Tabasco (social media site)</h2>
      <p>A social media site based on Twitter and Pixiv.</p>

      <h3>Features</h3>
      <ul>
        <li>Image uploads</li>
        <li>Creating/liking posts</li>
        <li>Adding friends</li>
        <li>Testing APIs with SuperTest, MongoMemoryServer and Jest</li>
      </ul>

      <a href="https://tabasco.netlify.app/login" target="_blank">
        Live link
      </a>
      <a href="https://github.com/jasonHYLam/Odinbook/" target="_blank">
        Frontend repo
      </a>
      <a href="https://github.com/jasonHYLam/Odinbook-Server/" target="_blank">
        Backend repo
      </a>
    </>
  );
}
