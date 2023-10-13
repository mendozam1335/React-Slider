import React from "react";
import { FaAngleRight } from "react-icons/fa";

const NextButton = ({ onButtonClick }) => {
  return (
    <button className="next" onClick={onButtonClick}>
      <FaAngleRight />
    </button>
  );
};

export default NextButton;
