import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MemeImg from "./components/MemeImg";

//* The 1st time this page load, connect to an API that returns an array of
//* 100 top meme images.
//* When click button, randomly choose to another image from this array.
//* Type into boxes and text show on the image.

function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "",
  });

  const [allMemeData, setAllMemeData] = useState([]);
  const apiUrl = "https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setAllMemeData(res.data.memes);

        //? res.data.memes can't be replaced by allMemeData,
        //? cuz allMemeData is populated with data from the API after the useEffect hook runs
        //? at this time, it is still an empty array.
        const i = Math.floor(Math.random() * res.data.memes.length);
        const firstUrl = res.data.memes[i].url;
        setMeme((prevMeme) => ({ ...prevMeme, randomImg: firstUrl }));
      });
  }, []);

  function ShuffleImg() {
    const i = Math.floor(Math.random() * allMemeData.length);
    const newImgUrl = allMemeData[i].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: newImgUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <Header />
      <Form
        handleImgShuffle={ShuffleImg}
        handleChange={handleChange}
        meme={meme}
      />
      <MemeImg meme={meme} />
    </div>
  );
}

export default App;
