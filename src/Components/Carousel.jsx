import Slide from "./Slide";

const Carousel = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Slide person={person} key={person.id} />;
      })}
    </div>
  );
};

export default Carousel;
