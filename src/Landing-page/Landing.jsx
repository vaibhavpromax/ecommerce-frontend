import styles from "./Landing.module.scss"
const Landing = () => {
    return <div className={styles.wrapper}>
        <span className={styles.ff}>
            Nous arrivons bientôt
        </span>
        <p>
            Torréfaction en cours... Cela va prendre un petit peu de temps car nous voulons le meilleur pour vous.<br/>
            Pour être notifié lorsque tout sera prêt, vous pouvez nous laisser votre adresse mail.
        </p>
        <span className={styles.yy}>
        <input type="text" placeholder="bonjour@mail.com" />
        <button><span className={styles.gg}>Prévenez-moi</span></button>
        </span>
    </div>

}
export default Landing