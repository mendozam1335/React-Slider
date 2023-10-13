import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const PrevButton = ({ index, setCurrentSlide }) => {
  const handleOnClick = () => {
    setCurrentSlide(index - 1);
  };
  return (
    <button className="prev" onClick={handleOnClick}>
      <FaAngleLeft />
    </button>
  );
};

export default PrevButton;
