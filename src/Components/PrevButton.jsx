import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const PrevButton = () => {
  const handleOnClick = () => {
    console.log("Prev Clicked");
  };
  return (
    <button className="prev" onClick={handleOnClick}>
      <FaAngleLeft />
    </button>
  );
};

export default PrevButton;
