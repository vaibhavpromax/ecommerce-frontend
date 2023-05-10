import styles from "./ForthPage.module.scss";
const ForthPage = () => {
  return (
    <>
      <section className={styles.homebottom}>
        <div className={styles.NotFoundContainer}>
          <div className={styles.upper}>
            <div className={styles.upperleft}>
              <span className={styles.lbl1}>Ne manquez aucune box!</span>
              <span className={styles.lbl2}>
                Inscrivez-vous à notre newsletter!
              </span>
              <div className={styles.added}>
                <input
                  type="text"
                  className={styles.text}
                  placeholder="jeveuxuncodepromo@svp.com"
                />
                <span className={styles.lbl3}>Je m’inscris</span>
              </div>
            </div>
            <div className={styles.upperright}></div>
          </div>
          <footer>
            <img src="../assets/vector.png" alt="" />
            <div className={styles.fleft}>
              <span>A PROPOS</span>
              <span>Accueil</span>
              <span>Nous contacter</span>
              <span>FAQ</span>
              <span>Mentions légales</span>
              <span>Politique de confidentialité</span>
            </div>
            <div className={styles.fmiddle}>
              <span>SERVICES</span>
              <span>S’enregistrer</span>
              <span>Se connecter</span>
              <span>La box du moment</span>
              <span>Boutique</span>
            </div>
            <div className={styles.fright}>
              <span>S’ABONNER</span>
              <span>@ungraindanslaboite</span>
              <span>Un grain dans la boîte</span>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};
export default ForthPage;
