import React, { useState } from "react";
import styles from "./Profile.module.scss";
import { profileOptions } from "./const";
import { ICONS } from "../../icons";

const Profile = () => {
  const [isSelected, setIsSelected] = useState(profileOptions[0]);
  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div className={styles.info}>
          <img
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />

          <div className={styles.name}>
            <h3>Welcome</h3>
            <h4>Hello There</h4>
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          {profileOptions.map((pro, index) => {
            return (
              <div
                key={index}
                onClick={() => setIsSelected(pro)}
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
      <div className={styles.right}>{isSelected.component}</div>
    </div>
  );
};

export default Profile;
