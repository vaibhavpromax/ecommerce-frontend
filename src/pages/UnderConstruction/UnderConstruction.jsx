import { useState } from "react";
import useUnderConstruction from "../../apis/useUnderConstruction";
import Button from "../../components/Button/Button";
import styles from "./UnderConstruction.module.scss";
import { isEmail } from "../../utils/validateEmail";

const UnderConstruction = () => {
  const [mail, setMail] = useState("");

  const { addMail, error } = useUnderConstruction();

  const submitHandler = () => {
    if (!isEmail(mail)) return alert("Veuillez entrer une adresse mail valide");

    // addMail({ mail: mail });
    addMail({ mail: mail }, () => {
      alert("Votre email a bien été enregistré");
      setMail("");
    }).catch((err) => {
      alert("mail existe, essayez avec un autre");
    });
  };
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
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="text"
            placeholder="bonjour@mail.com"
          />
          <Button onClick={submitHandler} className={styles.button}>
            Prévenez-moi
          </Button>
        </span>
      </div>
    </div>
  );
};
export default UnderConstruction;
