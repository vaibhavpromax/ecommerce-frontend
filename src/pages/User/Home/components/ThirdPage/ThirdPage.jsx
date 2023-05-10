import Button from "../../../../../components/Button/Button";
import styles from "./ThirdPage.module.scss";

import { ReactComponent as SingleBean } from "../../../../../assets/singlebean.svg";
import { ReactComponent as CoffeeTray } from "../../../../../assets/coffeetray.svg";
const ThirdPage = () => {
  return (
    <>
      <section className={styles.row3}>
        <div className={styles.outerdiv}>
          <div className={styles.outerdivimg}></div>

          <div className={styles.innerdiv}>
            <div className={styles.top}>
              <div className={styles.left}>{/* <CoffeeTray /> */}</div>
              <div className={styles.right}>
                <h3>Que contiendra votre box ?</h3>

                <div className={styles.list}>
                  <div className={styles.listitem}>
                    <SingleBean />
                    <p>1 café différent à découvrir dans chaque box.</p>
                  </div>
                  <div className={styles.listitem}>
                    <SingleBean />
                    <p>
                      De quoi perfectionner vos pauses café : mugs, sirops,
                      biscuits, etc.
                    </p>
                  </div>{" "}
                  <div className={styles.listitem}>
                    <SingleBean />
                    <p>
                      Des goodies pour décrier votre amour du café au monde
                      (artworks, stickers, pins, etc.).
                    </p>
                  </div>{" "}
                  <div className={styles.listitem}>
                    <SingleBean />
                    <p>
                      1 livret avec des explications sur le café reçu, des
                      informations sur la culture du café, des recettes, et bien
                      d’autres surprises…
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <Button className={styles.btn}>Découvrez la box du moment</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ThirdPage;
