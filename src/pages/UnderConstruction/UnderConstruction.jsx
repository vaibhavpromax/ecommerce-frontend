import Button from "../../components/Button/Button";

import styles from "./UnderConstruction.module.scss";

const UnderConstruction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.underConstruction}>
        <span className={styles.title}>Nous arrivons bientôt</span>
        <p>
          Torréfaction en cours... Cela va prendre un petit peu de temps car
          nous voulons le meilleur pour vous.
          <br />
          Pour être notifié lorsque tout sera prêt, vous pouvez nous laisser
          votre adresse mail.
        </p>
        <span className={styles.input}>
          <input type="text" placeholder="bonjour@mail.com" />
          <Button className={styles.button}>Prévenez-moi</Button>
        </span>
      </div>
    </div>
  );
};
export default UnderConstruction;
