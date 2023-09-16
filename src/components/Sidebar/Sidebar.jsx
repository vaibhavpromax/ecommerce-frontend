import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { ICONS } from "../../icons";
import { adminOptions } from "./const";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ routes }) => {
  const [isSelected, setIsSelected] = useState(adminOptions[0]);
  const navigate = useNavigate();
  const location = useLocation();
  let allRoutes = [];
  routes.forEach((route) => {
    if (route.link.split("/")[1] != "")
      allRoutes.push(route.link.split("/")[1]);
  });
  allRoutes.push("order");
  allRoutes.push("customer");

  useEffect(() => {
    adminOptions.map((opt) => {
      if (opt.navigateTo == location.pathname) {
        setIsSelected(opt);
        return;
      }
    });
  }, []);

  return (
    <div
      style={{
        display: allRoutes.includes(location.pathname.split("/")[1])
          ? ""
          : "none",
      }}
      className={styles.sidebar}
    >
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
