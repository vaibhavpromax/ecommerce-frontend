import styles from "./SecondPage.module.scss";
import { ReactComponent as CoffeeBeans } from "../../../../../assets/coffeeBeans.svg";
import { ReactComponent as Cup } from "../../../../../assets/cup.svg";
import { ReactComponent as BrewMachine } from "../../../../../assets/brewmachine.svg";
const SecondPage = () => {
  return (
    <>
      <section className={styles.homemiddle}>
        <div className={styles.one}>
          <div className={styles.left}>
            <h3>La pause-café, c’est sacré !</h3>
            <p className={styles.para1}>
              Une suspension dans le temps. Un moment où <b>tout s’arrête.</b>{" "}
              Savourer son café, tout en passant un instant de <b> qualité </b>{" "}
              avec ses amis, sa famille, ses collègues, ou même seul.e. Nous
              confectionnons des box qui aspirent à vous donner toutes les{" "}
              <b> clefs en main </b> pour une pause café <b> hors pair</b>.
            </p>
            <span className={styles.span1}>
              Commandez, découvrez, dégustez.
            </span>
            <p className={styles.para2}>
              Disponible en <b> quantité limité </b>, chaque box est{" "}
              <b> unique </b>. impatience, A l’image du fika suédois, nos box
              sont une ôde au café.{" "}
            </p>
            <p className={styles.para3}>
              “Quand les choses se <br /> corsent, les durs prennent <br /> une
              pause-café.”
            </p>
            <p className={styles.para4}>Stephen Hawking</p>
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.two}>
          <div className={`${styles.colmtwo} `}>
            <Cup className={styles.img} />
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
              eiusmod tempor incididunt ut ero labore.
            </p>
          </div>
          <div className={`${styles.colmtwo} `}>
            <CoffeeBeans className={styles.img} />
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
              eiusmod tempor incididunt ut ero labore.
            </p>
          </div>
          <div className={`${styles.colmtwo} `}>
            <BrewMachine className={styles.img} />
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
              eiusmod tempor incididunt ut ero labore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default SecondPage;
