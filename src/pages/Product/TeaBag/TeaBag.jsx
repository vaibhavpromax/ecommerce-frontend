import React from 'react';
import Heart from "../../../assets/heart.svg";
import TeaBag from "../../../assets/TeaBag.svg";
import Beans from "../../../assets/Beans.svg";
import "./TeaBag.css"

const TeaBags = () => {
  const images = {
    Pic1: TeaBag,
    Pic2: TeaBag,
    Pic3: TeaBag,
    Pic4: TeaBag,
    Pic5: Beans,
  };

  return (
    <div className="teabagcontainer">
      <div className="teabagupper">
        <img src={images.Pic1} alt="" className="pic1" />
        <span className="heart">
          <img src={Heart} alt="Heart" />
        </span>
      </div>
      <div className="teabaglower">
        <div className="teaimages aa">
          <img src={images.Pic2} alt="Tea Bag" className="pic2" />
        </div>
        <div className="teaimages aa">
          <img src={images.Pic3} alt="Tea Bag" className="pic3" />
        </div>
        <div className="teaimages aa">
          <img src={images.Pic4} alt="Tea Bag" className="pic4" />
        </div>
        <div className="teaimages aa">
          <img src={images.Pic5} alt="Beans" className="pic5" />
        </div>
      </div>
    </div>
  );
};

export default TeaBags;
