import React, { useEffect, useState } from "react";
import styles from "./AdminPage.module.scss";
import { useNavigate } from "react-router-dom";
import Password from "../../../components/Password/Password";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import useAdmin from "../../../apis/useAdmin";

const AdminPage = () => {
  const [view, setView] = useState("details");
  const [pas, setPas] = useState({
    current_pass: "",
    new_pass: "",
    confirm_new_pass: "",
  });
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();
  const {
    changeAdminPassword,
    changePasswordLoading,
    getAdminInfo,
    getAdminInfoLoading,
  } = useAdmin();

  const changePasswordHandler = async () => {
    changeAdminPassword(
      { current_pass: pas.current_pass, new_pass: pas.new_pass },
      () => {
        localStorage.removeItem("admin");
        navigate("/");
      }
    );
  };

  const getAdmin = async () => {
    await getAdminInfo((data) => {
      setAdmin(data?.data);
    });
  };
  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <div className={styles.details}>
      {view === "details" ? (
        <>
          <div className={styles.header}>Account Settings </div>
          <div className={styles.bottom}>
            {!false ? (
              <div className={styles.info}>
                <div className={styles.line}>
                  <h4>Name</h4>
                  <h5>{admin?.name}</h5>
                </div>
                <div className={styles.line}>
                  <h4>Email</h4>
                  <h5>{admin?.email}</h5>
                </div>
              </div>
            ) : (
              <>
                <h4>Loading</h4>
              </>
            )}
            <div onClick={() => setView("pass")} className={styles.chng}>
              Change password
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.header}>Change password</div>
          <div className={styles.fields}>
            <Password
              label="Current password"
              value={pas.current_pass}
              setValue={(e) => {
                setPas({ ...pas, current_pass: e });
              }}
            />
            <Password
              label="New password"
              value={pas.new_pass}
              setValue={(e) => {
                setPas({ ...pas, new_pass: e });
              }}
            />
            <Password
              label="Confirm password"
              value={pas.confirm_new_pass}
              setValue={(e) => {
                setPas({ ...pas, confirm_new_pass: e });
              }}
            />
          </div>

          <div className={styles.btnrow}>
            <Button onClick={() => changePasswordHandler()}>Save</Button>
            <Button
              theme="WHITE"
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

export default AdminPage;
