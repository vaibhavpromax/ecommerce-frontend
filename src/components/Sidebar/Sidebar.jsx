import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { ICONS } from "../../icons";
import { adminOptions } from "./const";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isSelected, setIsSelected] = useState(adminOptions[0]);
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>{ICONS.logoIconWhite}</div>

      <div className={styles.bottom}>
        {adminOptions.map((pro, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setIsSelected(pro);
                navigate(pro.navigateTo);
              }}
              className={` ${styles.listOption}`}
            >
              <div
                className={` ${
                  pro.val === isSelected.val ? styles.active : ""
                }  ${styles.option}`}
              >
                {pro.icon} {pro.text}{" "}
              </div>
              {pro.val === isSelected.val && ICONS.rightArrow}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
