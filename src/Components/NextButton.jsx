import React from "react";
import { FaAngleRight } from "react-icons/fa";

const NextButton = ({ setCurrentSlide, index }) => {
  const handleOnClick = () => {
    setCurrentSlide(index + 1);
  };
  return (
    <button className="next" onClick={handleOnClick}>
      <FaAngleRight />
    </button>
  );
};

export default NextButton;
