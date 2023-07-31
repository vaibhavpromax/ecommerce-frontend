import React, { useState } from "react";
import styles from "./History.module.scss";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import Select from "../../../../components/Select/Select";

const month_options = {
  3: "Past 3 months",
  1: "Past Year",
};

const History = () => {
  const [select, setSelect] = useState(3);
  return (
    <div className={styles.history}>
      <div className={styles.header}>Order history</div>
      <div className={styles.select}>
        <Select
          theme="normal"
          dropdownarrow="triangularDropDown"
          options={month_options}
          value={select}
          setValue={(val) => {
            setSelect(val);
          }}
        />
      </div>

      <div className={styles.histories}>
        <HistoryCard />
      </div>
    </div>
  );
};

export default History;
