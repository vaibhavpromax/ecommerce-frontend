import Button from "../../../../../components/Button/Button";
import styles from "./TopPage.module.scss";
import { ReactComponent as TopChoco } from "../../../../../assets/topchoco.svg";
import TopHeader from "../../../../../components/TopHeader/TopHeader"
import Scroll from "../../../../../components/ScrollButton/Scroll"
const TopPage = () => {
  return (
    <>
     <TopHeader/>
   
      <section className={styles.hometop}>
      <Scroll/>
        {/* <TopBackground className={styles.topbackground} /> */}
        <div className={styles.toptext}>
          <p>Découvrez l'art de la pause café</p>
          <p>à travers nos box exclusives.</p>
        </div>
        <Button className={styles.button}>Scrollez pour découvrir</Button>
        
        <div className={styles.topimage}></div>

        {/* <div className={styles.chocoimage}></div>
         */}
        <TopChoco className={styles.topChoco} />
       
      </section>
    </>
  );
};
export default TopPage;
