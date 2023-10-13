import { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import Carousel from "./Components/Carousel";
import PrevButton from "./Components/PrevButton";
import NextButton from "./Components/NextButton";
import SlickCarousel from "./Components/SlickCarousel";

const App = () => {
  const [list, setList] = useState(longList);
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((oldSlide) => {
      const result = (oldSlide - 1 + list.length) % list.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentSlide((oldSlide) => {
      const result = (oldSlide + 1) % list.length;
      return result;
    });
  };
  useEffect(() => {
    const sliderID = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(sliderID);
    };
  }, [currentSlide]);
  return (
    <main>
      {/* <section className="slider-container">
        <Carousel people={list} currentSlide={currentSlide} />
        <NextButton onButtonClick={nextSlide} />
        <PrevButton onButtonClick={prevSlide} />
      </section> */}
      <SlickCarousel />
    </main>
  );
};
export default App;
