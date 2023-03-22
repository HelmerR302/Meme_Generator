import React, { useRef } from "react";
import domtoimage from "dom-to-image-more";
import { saveAs } from "file-saver";

function MemeImg(props) {
  const memeContainer = useRef(null);

  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  function handleClick() {
    const memeNode = memeContainer.current;

    // Move text to the left with 1/2 text width
    const topTextWidth = topTextRef.current.clientWidth;
    const bottomTextWidth = bottomTextRef.current.clientWidth;
    const textStyles = {
      ".top": {
        left: `${-1 * (topTextWidth / 2)}px`,
      },
      ".bottom": {
        left: `${-1 * (bottomTextWidth / 2)}px`,
      },
    };

    const options = {
      style: {
        padding: "0",
        ...textStyles,
      },
    };

    domtoimage.toBlob(memeNode, options).then((blob) => {
      window.saveAs(blob, "myMeme.png");
    });
  }

  return (
    <main>
      <div className="meme-container" ref={memeContainer}>
        <img
          className="meme-example"
          src={props.meme.randomImg}
          alt="meme image"
        />

        <h2 className="meme-text top" ref={topTextRef}>
          {props.meme.topText}
        </h2>
        <h2 className="meme-text bottom" ref={bottomTextRef}>
          {props.meme.bottomText}
        </h2>
      </div>
      <p className="download-btn" onClick={handleClick}>
        <u>
          <i>
            <b>Click to download new meme</b>
          </i>
        </u>
      </p>
    </main>
  );
}

export default MemeImg;
