function Form(props) {
  return (
    <main>
      <div className="form-container">
        <form>
          <label htmlFor="topline"></label>
          <input
            type="text"
            id="topline"
            placeholder="add text on the top"
            name="topText"
            onChange={props.handleChange}
            value={props.meme.topText}
          ></input>

          <label htmlFor="btmline"></label>
          <input
            type="text"
            id="btmline"
            placeholder="add text on the bottom"
            name="bottomText"
            onChange={props.handleChange}
            value={props.meme.bottomText}
          ></input>
        </form>

        <button className="new-img-btn" onClick={props.handleImgShuffle}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}

export default Form;
