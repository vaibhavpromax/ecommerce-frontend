import styles from "./SecondPage.module.scss"
const SecondPage = () => {
  return (
    <>
      <section className={styles.homemiddle}>
        <div className={styles.one}>
          <div className={styles.left}>
            <h3>La pause-café, c’est sacré !</h3>
            <p className={styles.para1}>
              Une suspension dans le temps. Un moment où <b>tout s’arrête.</b>{" "}
              Savourer son café, tout en passant un instant de qualité avec ses
              amis, sa famille, ses collègues, ou même seul.e. Nous
              confectionnons des box qui aspirent à vous donner toutes les clefs
              en main pour une pause café hors pair.
            </p>
            <span className={styles.span1}>Commandez, découvrez, dégustez.</span>
            <p className={styles.para2}>
              Disponible en quantité limité, chaque box est unique. impatience,
              A l’image du fika suédois, nos box sont une ôde au café.{" "}
            </p>
            <p className={styles.para3}>
              “Quand les choses se corsent, les durs prennent une pause-café.”
            </p>
            <p className={styles.para4}>Stephen Hawking</p>
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.two}>
          <div className = {`${styles.colmtwo} ${styles.fi}`}>
            <p>
              <e>Lorem Ipsum</e>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
              eiusmod tempor incididunt ut ero labore.
            </p>
          </div>
          <div className = {`${styles.colmtwo} ${styles.si}`}>
            <p>
              Lorem Ipsum
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
              eiusmod tempor incididunt ut ero labore.
            </p>
          </div>
          <div className = {`${styles.colmtwo} ${styles.ti}`}>
            <p>
              Lorem Ipsum
              <br />
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
