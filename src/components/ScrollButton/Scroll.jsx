import React, { useState, useEffect } from "react";
import styles from "./Scroll.module.scss";
import Scroll from "../../assets/Scroll.svg";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const button = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(button > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(window.pageYOffset);

  return (
    <div>
      {isVisible && (
        <button onClick={handleClick} className={styles.scrollbutton}>
        <img src={Scroll} alt="" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
