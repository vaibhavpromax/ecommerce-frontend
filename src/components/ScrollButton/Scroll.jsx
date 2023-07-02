// import React from 'react';
// import styles from "./Scroll.module.scss"
// const ScrollButton = () => {
//   const handleClick = () => {
//     window.scrollTo({
//       top:0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <button onClick={handleClick} className={styles.scrollbutton}>
//     Down
//     </button>
//   );
// };

// export default ScrollButton;

import React from "react";
import styles from "./Scroll.module.scss";

const ScrollButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={handleClick} className={styles.scrollbutton}>
      Scroll Up
    </button>
  );
};

export default ScrollButton;
