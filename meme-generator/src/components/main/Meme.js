const Meme = () => {
  return (
    <form method="get">
      <input type="text" placeholder="First Part" required />
      <input type="text" placeholder="Second Part" required />
      <button type="submit">
        Get a new meme image <i className="fas fa-image"></i>
      </button>
    </form>
  );
};
export default Meme;
