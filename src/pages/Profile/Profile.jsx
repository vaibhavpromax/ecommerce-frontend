import React, { useState } from "react";
import styles from "./Profile.module.scss";
import { profileOptions } from "./const";
import { ICONS } from "../../icons";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const [isSelected, setIsSelected] = useState(profileOptions[0]);
  const { user } = useAuth();
  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div className={styles.info}>
          <img src={user?.user?.profile_pic_url} alt="" />

          <div className={styles.name}>
            <h3>Welcome</h3>
            <h4>Hello There</h4>
          </div>
        </div>
        <div className={styles.hr} />
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
