import React from "react";
import styles from "./Home.module.scss";
import TopPage from "./components/TopPage/TopPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import ForthPage from "./components/FourthPage/ForthPage";
//import TeaBags from "../../Product/TeaBag/TeaBag";
//import TeaBagR from "../../../components/TeaBagR/TeaBagR";
//import SortDD from "../../../components/SortDropdown/SortDropdown";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <TopPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      {/* <div className="sample" style={{display:'flex',flexDirection:'column'}}>
      <div className="upperdiv" style={{display:'flex',justifyContent:'space-between',width:'80%',marginTop:'3%',
      paddingLeft:'2%'}}>
      <TeaBags />
      <TeaBagR/> 
      </div>
      <div className="lowerdiv">
      <div className="searchbar"
      style={{display:'flex',
      justifyContent:'space-around',
      position:'relative',
      borderBottom:'1px solid grey',
      width:'80%',
      margin:'0 auto',
      paddingBottom:'10px'}}
      
      >

      <span className="review">221 Product reviews</span>
      <input type="text" className="postreview" placeholer="write product review"/>
      <span className="arr"
      style={{
      position:'absolute',
      left:'57%'  
      }}>@</span>
      <span className="latest"><SortDD/></span>
      

        </div>  
     
     
      </div>
      </div> */}
    </div>
  );
};
export default Home;
