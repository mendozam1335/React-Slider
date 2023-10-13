import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const PrevButton = ({ onButtonClick }) => {
  return (
    <button className="prev" onClick={onButtonClick}>
      <FaAngleLeft />
    </button>
  );
};

export default PrevButton;
