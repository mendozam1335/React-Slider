import React from "react";
import { FaQuoteRight } from "react-icons/fa";
const Slide = ({ person }) => {
  const { image, name, quote, title } = person;
  console.log(person);
  return (
    <div className="slide">
      <img src={image} alt={name} className="person-img" />
      <h4 className="name">{name}</h4>
      <h5 className="title">{title}</h5>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </div>
  );
};

export default Slide;
