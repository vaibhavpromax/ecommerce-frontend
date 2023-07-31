import React from "react";
import styles from "./Home.module.scss";
import TopPage from "./components/TopPage/TopPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import ForthPage from "./components/FourthPage/ForthPage";

const Home = () => {

  return (
    <div className={styles.wrapper}>
      <TopPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
    </div>
  );
};
export default Home;
