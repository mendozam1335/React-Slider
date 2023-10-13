import React from "react";
import { FaQuoteRight } from "react-icons/fa";
const Slide = ({ person, styles }) => {
  const { image, name, quote, title } = person;
  return (
    <div className="slide" style={styles}>
      <img src={image} alt={name} className="person-img" />
      <h5 className="name">{name}</h5>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </div>
  );
};

export default Slide;
