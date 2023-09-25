import React from "react";
import styles from "./NotFound.module.scss";
import Footer from "../../../src/components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.NotFoundContainer}>
      <div className={styles.upper}>
        <div className={styles.upperleft}>
          <span>Erreur 404</span>
          <span>
            Il semblerait que cette page soit partie faire une pause café…{" "}
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Retourner au menu principal{" "}
          </span>
        </div>
        <div className={styles.upperright}></div>
      </div>
    </div>
  );
  // <Footer />
};
// <Footer />

export default NotFound;
