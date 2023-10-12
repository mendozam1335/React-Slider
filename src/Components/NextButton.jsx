import React from "react";
import { FaAngleRight } from "react-icons/fa";

const NextButton = () => {
  const handleOnClick = () => {
    console.log("Next Clicked");
  };
  return (
    <button className="next" onClick={handleOnClick}>
      <FaAngleRight />
    </button>
  );
};

export default NextButton;
