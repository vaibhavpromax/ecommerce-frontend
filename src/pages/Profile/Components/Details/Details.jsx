import React, { useEffect, useState } from "react";
import styles from "./Details.module.scss";
import Password from "../../../../components/Password/Password";
import { ICONS } from "../../../../icons";
import Button from "../../../../components/Button/Button";
import useProfileSettings from "../../../../apis/useSettings";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

const Details = () => {
  const [view, setView] = useState("details");
  const [pas, setPas] = useState({
    current_pass: "",
    new_pass: "",
    confirm_new_pass: "",
  });
  const [userInfo, setUserInfo] = useState(null);
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const {
    fetchUser,
    getUserLoading,
    changePassword,
    changePasswordLoading,
    updateUserProfilePic,
  } = useProfileSettings();

  const changePasswordHandler = async () => {
    changePassword(
      { current_pass: pas.current_pass, new_pass: pas.new_pass },
      () => {
        localStorage.removeItem("user");
        navigate("/login");
      }
    );
  };

  const getUser = async () => {
    await fetchUser((data) => {
      setUserInfo(data?.data);
      const prev = JSON.parse(localStorage.getItem("user"));
      const newItem = {
        token: prev.token,
        user: { ...prev.user, profile_pic_url: data?.data?.profile_pic_url },
      };
      localStorage.setItem("user", JSON.stringify(newItem));
      setUser(newItem);
    });
  };
  const handleUpload = (e) => {
    // Implement your upload logic here
    // if (userImage) {
    // Use APIs like FormData to upload the file
    console.log("first");
    const formdata = new FormData();
    formdata.append("image", e.target.files[0]);
    console.log(formdata);
    updateUserProfilePic(formdata, (res) => {
      getUser();
    });
    // }
  };
  console.log(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.details}>
      {view === "details" ? (
        <>
          <div className={styles.header}>Account Settings </div>
          <div className={styles.bottom}>
            <img
              src={userInfo?.profile_pic_url}
              className={styles.profilepic}
              alt=""
            />
            <label htmlFor="userImage" className={styles.camera}>
              {ICONS.camera}
              <input
                type="file"
                id="userImage"
                onChange={(e) => {
                  handleUpload(e);
                }}
                style={{ display: "none" }}
              />
            </label>

            {!getUserLoading ? (
              <div className={styles.info}>
                <div className={styles.line}>
                  <h4>Name</h4>
                  <h5>{userInfo?.name}</h5>
                </div>
                <div className={styles.line}>
                  <h4>Email</h4>
                  <h5>{userInfo?.email}</h5>
                </div>
                {/*
                  <div className={styles.line}>
                  <h4>Contact No.</h4>
                  <h5>{userInfo?.phone_no}</h5>
                </div>
              */}
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

export default Details;
