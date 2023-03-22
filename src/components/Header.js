import React from "react";
import logoImg from "../assets/Troll Face.png";

function Header() {
  return (
    <header>
      <img src={logoImg} alt="logo image"></img>
      <h1 className="title">Meme Generator</h1>
      <p className="des">Create your own meme!</p>
    </header>
  );
}

export default Header;
