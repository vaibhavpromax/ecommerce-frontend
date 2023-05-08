import styles from "./TopPage.module.scss";
const TopPage = () => {
  return (
    <>
      <section className={styles.hometop}>
        <div className={styles.toptext}>
          Découvrez l'art de la pause café <br />à travers nos box exclusives.
        </div>
        <span className={styles.middletext}>Scrollez pour découvrir</span>
        <div className={styles.topimage}></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ECE8E5"
            d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className={styles.chocoimage}></div>
      </section>
    </>
  );
};
export default TopPage;
