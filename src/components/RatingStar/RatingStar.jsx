import React, { useState } from "react";
import starSvg from "../../assets/star.svg";
import Blank from "../../assets/Blank.svg";
const RatingStar = () => {
  const [arr, setArr] = useState([
    { id: 1, status: true },
    { id: 2, status: true },
    { id: 3, status: true },
    { id: 4, status: true },
    { id: 5, status: false },
  ]);

  const handleClick = (index) => {
    setArr(
      arr.map((e) =>
        e.id === index ? { ...e, status: e.status === true ? false : true } : e
      )
    );
  };

  return (
    <div>
      {arr.map((e) => (
        <img
          key={e.id}
          src={e.status ? starSvg : Blank}
          alt="star"
          style={{
            width: "24px",
            height: "24px",
            marginLeft: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleClick(e.id)}
        />
      ))}
    </div>
  );
};

export default RatingStar;
