import Data from "./Data";
import React, { useState } from "react";

// set state
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/261o3j.jpg",
  });

  // deals w/ typed in data
  const handleInputs = (event) => {
    setMeme((prevMeme) => {
      const { name, type, checked, value } = event.target;
      return {
        ...prevMeme,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  // deals w/ random images
  const getNewMemeImg = () => {
    const memeArr = Data.data.memes; // gets memes array
    const randomNum = Math.floor(Math.random() * 100); // gets random number (1-99)
    const { url } = memeArr[randomNum]; // gets .url from memes array
    // change state of meme
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeImage: url,
      };
    });
  };

  return (
    <section className="meme-form">
      <input
        required
        type="text"
        placeholder="First Part"
        className="meme-input1"
        value={meme.topText}
        onChange={handleInputs}
        name="topText"
      />
      <input
        required
        type="text"
        placeholder="Second Part"
        className="meme-input2"
        value={meme.bottomText}
        onChange={handleInputs}
        name="bottomText"
      />
      <button type="submit" className="meme-btn" onClick={getNewMemeImg}>
        Get a new meme image <i className="fas fa-image"></i>
      </button>

      <figure className="img-container">
        <img src={meme.memeImage} alt="Random from Data.js file." />
      </figure>

      <div>
        <p>{meme.topText}</p>
        <p>{meme.bottomText}</p>
      </div>
    </section>
  );
};
export default Meme;
