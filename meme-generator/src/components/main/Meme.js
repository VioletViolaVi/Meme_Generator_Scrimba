import Data from "./Data";

const Meme = () => {
  const getNewMemeImg = () => {
    // gets memes array
    const memeArr = Data.data.memes;
    // gets random nu 1-99
    const randomNum = Math.floor(Math.random() * 100);
    // gets .url from memes array
    const { url } = memeArr[randomNum];
    console.log(url);
  };

  return (
    <section className="meme-form">
      <input
        required
        type="text"
        placeholder="First Part"
        className="meme-input1"
      />
      <input
        required
        type="text"
        placeholder="Second Part"
        className="meme-input2"
      />
      <button type="submit" className="meme-btn" onClick={getNewMemeImg}>
        Get a new meme image <i className="fas fa-image"></i>
      </button>
    </section>
  );
};
export default Meme;
