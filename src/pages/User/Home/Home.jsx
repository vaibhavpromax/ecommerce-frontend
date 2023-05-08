import React from "react";
import styles from "./Home.module.scss";
import TopPage from "../../../components/TopPage";
import SecondPage from "../../../components/SecondPage";
import ThirdPage from "../../../components/ThirdPage";
import ForthPage from "../../../components/ForthPage";
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
