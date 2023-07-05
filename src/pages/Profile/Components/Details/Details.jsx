import React, { useState } from "react";
import styles from "./Details.module.scss";
import Password from "../../../../components/Password/Password";
import { ICONS } from "../../../../icons";
import Button from "../../../../components/Button/Button";

const Details = () => {
  const [view, setView] = useState("details");
  const [pas, setPas] = useState("");
  return (
    <div className={styles.details}>
      {view === "details" ? (
        <>
          <div className={styles.header}>Account Settings {ICONS.pen}</div>
          <div className={styles.bottom}>
            <div className={styles.profilepic}></div>

            <div className={styles.info}>
              <div className={styles.line}>
                <h4>Name</h4>
                <h5>Vaibhav Singh</h5>
              </div>
              <div className={styles.line}>
                <h4>Email</h4>
                <h5>singhvaibhav557hr@gmail.com</h5>
              </div>
              <div className={styles.line}>
                <h4>Contact No.</h4>
                <h5>829909992</h5>
              </div>
              <div className={styles.line}>
                <h4>Contact No.</h4>
                <h5>829909992</h5>
              </div>{" "}
              <div className={styles.line}>
                <h4>Contact No.</h4>
                <h5>829909992</h5>
              </div>
            </div>

            <div onClick={() => setView("pass")} className={styles.chng}>
              Change password
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.header}>Change password</div>
          <div className={styles.fields}>
            <Password label="Current password" value={pas} setVal={setPas} />
            <Password label="New password" value={pas} setVal={setPas} />
            <Password label="Confirm password" value={pas} setVal={setPas} />
          </div>

          <div className={styles.btnrow}>
            <Button>Save</Button>
            <Button
              onClick={() => setView("details")}
              className={styles.cancel}
            >
              Cancel
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
