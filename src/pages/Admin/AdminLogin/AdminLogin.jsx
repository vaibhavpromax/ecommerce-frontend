import React, { useState, useEffect } from "react";
import loginleft from "../../../assets/loginleft.png";
import styles from "./AdminLogin.module.scss";
import TextBox from "../../../components/TextBox/TextBox";
import Password from "../../../components/Password/Password";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import { useNavigate } from "react-router-dom";
import useAdminAuthentication from "../../../apis/useAdminAuthentication";
import { useAuth } from "../../../contexts/AuthContext";
// import useUserAuthentication from "../../../apis/userAuthentication";

const AdminLogin = () => {
  const [regData, setRegData] = useState({
    username: "",
    password: "",
  });
  const { loginAdmin, loginLoading } = useAdminAuthentication();
  const navigate = useNavigate();
  const { setAdmin } = useAuth();

  const loginHandler = () => {
    const payload = { email: regData.username, password: regData.password };
    console.log(payload);
    loginAdmin(payload, (data) => {
      setAdmin(data?.data);
      localStorage.setItem("admin", JSON.stringify(data.data));
      navigate("/orders");
    });
  };

  useEffect(() => { 
    const admin = localStorage.getItem("admin");
    if (admin) {
      navigate("/orders");
    }
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.loginwrapper}>
        <div className={styles.right}>
          <div className={styles.greeting}>
            <h4>Admin Login</h4>
            <h6>Sign in to continue</h6>
          </div>
          <div className={styles.fields}>
            <TextBox
              label="Username/Email"
              placeholder="Username/Email"
              value={regData.username}
              setValue={(e) => setRegData({ ...regData, username: e })}
            />

            <Password
              label="Password"
              placeholder="Enter password"
              value={regData.password}
              setValue={(e) => setRegData({ ...regData, password: e })}
            />
          </div>
          <div className={styles.options}>
            <div className={styles.leftoption}>
              <Checkbox tick={true} checked={true} onChange={() => {}} />{" "}
              Remember me
            </div>
            <div className={styles.rightoption}>Forgot password?</div>
          </div>

          <div className={styles.buttons}>
            <Button onClick={loginHandler}> Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
