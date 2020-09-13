import React from "react";
import hero_img4 from "../pictures/hero_img4.png";
import avatar1 from "../pictures/avatar1.png";
import hero_img5 from "../pictures/hero_img5.png";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const CarouselStack1 = () => {
  return (
    <div>
      <div
        id="carousel_1"
        className="carousel slide carol1"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="avatar1" src={hero_img4} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="avatar1" src={avatar1} alt="Second slide" />

            {/* <div className="carousel-caption carol_text">
        <p> people choice </p>
      </div> */}
      
          </div>
          <div className="carousel-item">
            <img className="avatar1" src={hero_img5} alt="Third slide" />
          </div>
        </div>
        <PrevButton prev="prev" />

        <NextButton next="next" />
      </div>
    </div>
  );
};

export default CarouselStack1;
