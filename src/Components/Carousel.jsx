import Slide from "./Slide";
import NextButton from "./NextButton";

const Carousel = ({ people, currentSlide }) => {
  let styles = "";
  return (
    <div>
      {people.map((person, index) => {
        styles = {
          transform: `translateX(${100 * (index - currentSlide)}%)`,
          opacity: index === currentSlide ? 1 : 0,
          visibility: index === currentSlide ? "visible" : "hidden",
        };
        return <Slide person={person} key={person.id} styles={styles} />;
      })}
    </div>
  );
};

export default Carousel;
