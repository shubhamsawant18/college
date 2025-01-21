// src/components/Divider.js
import React from "react";

const Divider = () => {
  return (
    <div
      style={{
        margin: "-31px 0 20px 0", // Adds margin (top: -20px, bottom: 20px)
        height: "0.1px", // Makes the line thinner
        backgroundColor: "#ddd", // Sets a light gray color
        borderRadius: "0.5px", // Gives rounded edges
        marginTop:"-24px",
        
      }}
    ></div>
  );
};

export default Divider;
