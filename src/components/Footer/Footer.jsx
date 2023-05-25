//import styles from "../../pages/User/Home/components/FourthPage/ForthPage.module.scss";
import styles from "./Footer.module.scss"
const Footer=()=>{
return (
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

)}
export default Footer