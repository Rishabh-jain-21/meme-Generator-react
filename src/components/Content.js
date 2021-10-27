import React, { useState } from "react";
import "./meme.css";

const Content = () => {
  const [toptext, settoptext] = useState("");
  const [lowtext, setlowtext] = useState("");
  const [img, setimg] = useState(
    "https://mews.in/wp-content/uploads/2021/08/images-5-3.jpeg"
  );

  const changleMemeImage = (e) => {
    setimg(e.target.value);
  };
  const handleTopText = (e) => {
    settoptext(e.target.value);
  };
  const handleLowText = (e) => {
    setlowtext(e.target.value);
  };
  return (
    <div className="container">
      <div>
        <div className="inputFeild">
          <input type="text" onChange={handleTopText} placeholder="top-text" />
          <input type="text" onChange={handleLowText} placeholder="low-text" />
          <input
            type="text"
            onChange={changleMemeImage}
            placeholder="meme-image"
          />
        </div>
        <div className="container-1">
          <img src={img} alt="photu" />
          <h1 className="uppertext">{toptext}</h1>
          <h1 className="lowertext">{lowtext}</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
