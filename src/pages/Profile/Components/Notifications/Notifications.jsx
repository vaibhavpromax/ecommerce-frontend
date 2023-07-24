import React, { useEffect, useState } from "react";
import styles from "./Notifications.module.scss";
import { ICONS } from "../../../../icons";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import Switch from "../../../../components/Switch/Switch";
import useProfileSettings from "../../../../apis/useSettings";

const TAB_OPTIONS = {
  NEW: "new",
  ALL: "all",
};

const NOTIFICATION_ICONS = {
  user: ICONS.user,
  system: ICONS.settings,
};

const Notifications = () => {
  const [notifs, setNotifs] = useState(null);
  const [activeTab, setactiveTab] = useState(TAB_OPTIONS.NEW);
  const { fetchNotification, getNotificationLoading } = useProfileSettings();

  const getNotification = async () => {
    await fetchNotification((data) => setNotifs(data.data));
  };

  useEffect(() => {
    getNotification();
  }, []); 

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
          {ICONS.inbox} {notifs?.length} new notifications
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
        {!getNotificationLoading ? (
          <>
            {notifs ? (
              <>
                {notifs.map((noti) => {
                  return (
                    <div className={styles.notif}>
                      <Checkbox tick={true} />
                      <div className={styles.notifCard}>
                        <div className={styles.left}>
                          <div className={styles.icon}>
                            {NOTIFICATION_ICONS[noti?.noti_type]}
                          </div>
                        </div>
                        <div className={styles.right}>
                          <div className={styles.up}>{noti?.noti_detail}</div>
                          <div className={styles.down}>
                            <h5>5 mins ago</h5>•<h5>{noti?.other_info}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h2>No notifications</h2>
            )}
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default Notifications;
