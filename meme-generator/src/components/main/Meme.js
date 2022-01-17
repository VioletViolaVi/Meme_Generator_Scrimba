const Meme = () => {
  return (
    <form method="get" className="meme-form">
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
      <button type="submit" className="meme-btn">
        Get a new meme image <i className="fas fa-image"></i>
      </button>
    </form>
  );
};
export default Meme;
