import React, { useState, useEffect } from "react";
import loginleft from "../../../assets/loginleft.png";
import styles from "./UserLogin.module.scss";
import TextBox from "../../../components/TextBox/TextBox";
import Password from "../../../components/Password/Password";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import { useNavigate } from "react-router-dom";
import useUserAuthentication from "../../../apis/userAuthentication";

const UserLogin = () => {
  const [regData, setRegData] = useState({
    username: "",
    password: "",
  });
  const { loginUser, loginLoading } = useUserAuthentication();
  const navigate = useNavigate();

  const loginHandler = () => {
    const payload = { email: regData.username, password: regData.password };
    console.log(payload);
    loginUser(payload, (data) => {
      localStorage.removeItem("session");
      localStorage.setItem("user", JSON.stringify(data.data));
      navigate("/shop");
    });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/profile");
    }
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.loginwrapper}>
        <div className={styles.left}>
          {ICONS.logoIconWhite}
          <img src={loginleft} alt="login" />
        </div>
        <div className={styles.right}>
          <div className={styles.greeting}>
            <h4>Welcome back!</h4>
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
            <Button theme="WHITE">{ICONS.google} Continue with Google </Button>
          </div>
          <div className={styles.bottomText}>
            <span>Already have an account?</span>{" "}
            <span
              onClick={() => navigate("/register")}
              className={styles.signin}
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
