import troll from "../../images/troll-face.png";

const Header = () => {
  return (
    <header>
      <div>
        <figure>
          <img src={troll} alt="A troll face." />
        </figure>
        <h1>Meme Generator</h1>
      </div>

      <div>
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
};
export default Header;
