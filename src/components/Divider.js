// src/components/Divider.js
import React from "react";

const Divider = () => {
  return (
    <div
      style={{
        margin: "-31px 0 20px 0", // Adds margin (top: -20px, bottom: 20px)
        height: "0.5px", // Makes the line thinner
        backgroundColor: "#ccc", // Sets a light gray color
        borderRadius: "1px", // Gives rounded edges
      }}
    ></div>
  );
};

export default Divider;
