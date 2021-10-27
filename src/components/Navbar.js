import React from "react";
import ico from "./navicon.png";
const Navbar = () => {
  return (
    <div
      style={{
        background: "purple",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={ico} alt="" style={{ height: "45px", paddingRight: "10px" }} />
      <h2 style={{ color: "aliceblue" }}>Meme Generator</h2>
    </div>
  );
};

export default Navbar;
