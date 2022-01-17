import troll from "../../images/troll-face.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="troll-container">
        <figure>
          <img src={troll} alt="A troll face." className="header-img" />
        </figure>
        <h1 className="title">Meme Generator</h1>
      </div>

      <div className="react-course-container">
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
};
export default Header;
