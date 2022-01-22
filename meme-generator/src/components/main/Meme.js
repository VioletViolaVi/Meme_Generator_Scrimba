import Data from "./Data";
import React, { useState } from "react";

const Meme = () => {
  // set state OG of meme via deconstructing
  const [meme, setMeme] = useState("https://i.imgflip.com/30b1gx.jpg");

  const getNewMemeImg = () => {
    // gets memes array
    const memeArr = Data.data.memes;
    // gets random nu 1-99
    const randomNum = Math.floor(Math.random() * 100);
    // gets .url from memes array
    const { randomUrl } = memeArr[randomNum];
    console.log(randomUrl);

    // change state of meme
    setMeme((prevMeme) => {
      return (prevMeme = randomUrl);
    });
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

      <img src={meme} alt="Random from Data.js file." />
    </section>
  );
};
export default Meme;
