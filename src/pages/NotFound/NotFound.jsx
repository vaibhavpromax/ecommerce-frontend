import React from "react";
//import "./NotFound.css";
import styles from "./NotFound.module.scss"
const NotFound = () => {
  return (
    <div className={styles.NotFoundContainer}>
      <div className={styles.upper}>
        <div className={styles.upperleft}>
          <span>Erreur 404</span>
          <span>
            Il semblerait que cette page soit partie faire une pause café…{" "}
          </span>
          <span>Retourner au menu principal </span>
        </div>
        <div className={styles.upperright}>
         </div>
      </div>
      
      <footer>
        <img src="../../assets/vector.png" alt=""/>
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
          <span>
            La box du moment
            </span>
          <span>Boutique</span>
        </div>
        <div className={styles.fright}>
          <span>S’ABONNER</span>
          <span>@ungraindanslaboite</span>
          <span>Un grain dans la boîte</span>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
