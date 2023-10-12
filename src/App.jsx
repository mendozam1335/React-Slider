import { useState } from "react";
import { shortList, list, longList } from "./data";
import Carousel from "./Components/Carousel";
import PrevButton from "./Components/PrevButton";
import NextButton from "./Components/NextButton";

const App = () => {
  const [list, setList] = useState(shortList);
  return (
    <main>
      <section className="slider-container">
        <Carousel people={list} />
        <NextButton />
        <PrevButton />
      </section>
    </main>
  );
};
export default App;
