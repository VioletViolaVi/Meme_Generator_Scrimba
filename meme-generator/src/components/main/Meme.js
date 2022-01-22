import Data from "./Data";
import React, { useState } from "react";

const Meme = () => {
  // set state OG of meme via deconstructing
  const [meme, setMeme] = useState("");

  const getNewMemeImg = () => {
    // gets memes array
    const memeArr = Data.data.memes;
    // gets random nu 1-99
    const randomNum = Math.floor(Math.random() * 100);
    // gets .url from memes array
    const { url } = memeArr[randomNum];
    // change state of meme
    setMeme(url);

    /* longer way but don't bother as the current/previous meme is NOT needed to change state unlike the counter example from scrimba:
    setMeme((prevMeme) => {
      return (prevMeme = url);
    });
    */
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

      <figure className="img-container">
        <img src={meme} alt="Random from Data.js file." />
      </figure>
    </section>
  );
};
export default Meme;
