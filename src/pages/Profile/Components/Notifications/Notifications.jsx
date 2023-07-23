import React, { useState } from "react";
import styles from "./Notifications.module.scss";
import { ICONS } from "../../../../icons";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import Switch from "../../../../components/Switch/Switch";

const TAB_OPTIONS = {
  NEW: "new",
  ALL: "all",
};

const NOTIFICATION_ICONS = {
  user: ICONS.user,
  system: ICONS.settings,
};

const Notifications = () => {
  const [activeTab, setactiveTab] = useState(TAB_OPTIONS.NEW);
  return (
    <div className={styles.notifications}>
      <div className={styles.header}>Notifications</div>
      <div className={styles.toggle}>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
          tempor incididunt ut ero labore.
        </h4>
        <div className={styles.switch}>
          <Switch />
        </div>
      </div>
      <div className={styles.tabs}>
        <div
          className={` ${activeTab === TAB_OPTIONS.NEW && styles.activetab} ${
            styles.tab
          }`}
          onClick={() => setactiveTab(TAB_OPTIONS.NEW)}
        >
          {" "}
          {ICONS.inbox} 3 new notifications
        </div>
        <div
          className={` ${activeTab === TAB_OPTIONS.ALL && styles.activetab} ${
            styles.tab
          }`}
          onClick={() => setactiveTab(TAB_OPTIONS.ALL)}
        >
          {" "}
          All{" "}
        </div>
      </div>

      <div className={styles.options}>
        <Checkbox tick={true} />
        <div className={styles.sel}>Select all</div>|
        <div className={styles.del}>Delete</div>
      </div>
      <div className={styles.notifswrapper}>
        <div className={styles.notif}>
          <Checkbox tick={true} />
          <div className={styles.notifCard}>
            <div className={styles.left}>
              <div className={styles.icon}>{NOTIFICATION_ICONS.user}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.up}>
                Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
                eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit.
              </div>
              <div className={styles.down}>
                <h5>5 mins ago</h5>•<h5>Upcoming Sale</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
