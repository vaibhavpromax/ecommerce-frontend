import styles from "./ThirdPage.module.scss"
const ThirdPage = () => {
  return (
    <>
      <section className={styles.row3}>
        <div className={styles.outerdiv}>
          <div className={styles.outerdivimg}></div>
          <div className={styles.innerdiv}>
            <div className={styles.leftdiv}></div>
            <div className={styles.rightdiv}>
              <h2>Que contiendra votre box ?</h2>
              <ul>
                <li>1 café différent à découvrir dans chaque box.</li>
                <li>
                  De quoi perfectionner vos pauses café : mugs, sirops,
                  biscuits, etc.
                </li>
                <li>
                  Des goodies pour décrier votre amour du café au monde
                  (artworks, stickers, pins, etc.).
                </li>
                <li>
                  1 livret avec des explications sur le café reçu, des
                  informations sur la culture du café, des recettes, et bien
                  d’autres surprises…
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottomdiv}>
            <button>Découvrez la box du moment</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default ThirdPage;
