import React, { useState, useEffect } from "react";

// set state
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/2wifvo.jpg",
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

  // deals w/ api
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    return () => {};
  }, []);

  // sets all data from api
  const [allMemes, setAllMemes] = useState([]);

  // deals w/ random images
  const getNewMemeImg = () => {
    const memeArr = allMemes; // gets memes array
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

      <p className="top-text">{meme.topText}</p>
      <p className="bottom-text">{meme.bottomText}</p>
    </section>
  );
};
export default Meme;
