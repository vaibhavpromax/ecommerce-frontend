import React from "react";
import styles from "./Details.module.scss";
import { ICONS } from "../../../../icons";

const Details = () => {
  return <div className={styles.details}>Account Details {ICONS.pen}</div>;
};

export default Details;
