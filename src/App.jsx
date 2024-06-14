import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Components/Carousel";
import { CarouselImages } from "./Data/Home";
import { MdArrowOutward } from "react-icons/md";

function App() {
  return (
    <div className="">
      <Carousel data={CarouselImages} />
      <div className="w-[90%] h-[70vh] m-auto p-2 flex ">
        <div className="w-2/3 h-full">
          <img
            src="./solarPanel3.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-1/3">
          <p className=" text-sm text-justify p-5">
            We have been implementing the best global energie trends since 2014
            for the sake of a nharmonious futur for people and nature
          </p>
        </div>
      </div>
      <div className="bg-green-400 w-full h-[70vh]"></div>
    </div>
  );
}

export default App;
