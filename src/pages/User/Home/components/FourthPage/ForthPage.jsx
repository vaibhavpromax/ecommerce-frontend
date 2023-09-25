import styles from "./ForthPage.module.scss";
import Footer from "../../../../../components/Footer/Footer";
import Button from "../../../../../components/Button/Button";
import useUnderConstruction from "../../../../../apis/useUnderConstruction";
import { useState } from "react";
import { isEmail } from "../../../../../utils/validateEmail";
const ForthPage = () => {
  const { addMail, loading } = useUnderConstruction();
  const [email, setEmail] = useState("");

  const addEmailHandler = async () => {
    if (!isEmail(email))
      return alert("Veuillez entrer une adresse mail valide");

    addMail({ mail: email }, () => {
      alert("Votre email a bien été enregistré");
      setEmail("");
    }).catch((err) => {
      alert("mail existe, essayez avec un autre");
    });
  };
  return (
    <>
      <section className={styles.homebottom}>
        <div className={styles.NotFoundContainer}>
          <div className={styles.upperleft}>
            <div className={styles.lables}>
              <div className={styles.lbl1}>Ne manquez aucune box!</div>
              <div className={styles.lbl2}>
                Inscrivez-vous à notre newsletter!
              </div>
            </div>
            <div className={styles.added}>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className={styles.text}
                placeholder="jeveuxuncodepromo@svp.com"
              />
              <Button
                onClick={addEmailHandler}
                loading={loading}
                className={styles.lbl3}
              >
                Je m’inscris
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default ForthPage;
