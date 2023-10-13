import { useState } from "react";
import { shortList, list, longList } from "./data";
import Carousel from "./Components/Carousel";
import PrevButton from "./Components/PrevButton";
import NextButton from "./Components/NextButton";

const App = () => {
  const [list, setList] = useState(longList);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <main>
      <section className="slider-container">
        <Carousel people={list} currentSlide={currentSlide} />
        <NextButton setCurrentSlide={setCurrentSlide} index={currentSlide} />
        <PrevButton setCurrentSlide={setCurrentSlide} index={currentSlide} />
      </section>
    </main>
  );
};
export default App;
