import React, { useState } from "react";
import loginleft from "../../../assets/loginleft.png";
import styles from "./UserRegister.module.scss";
import TextBox from "../../../components/TextBox/TextBox";
import Password from "../../../components/Password/Password";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import useUserAuthentication from "../../../apis/userAuthentication";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [regData, setRegData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const { registerLoading, registerUser } = useUserAuthentication();

  const registerHandler = () => {
    const payload = {
      email: regData.email,
      password: regData.password,
      first_name: regData.first_name,
      last_name: regData.last_name,
    };
    registerUser(payload, (data) => {
      localStorage.removeItem("session");
      localStorage.setItem("user", JSON.stringify(data.data));
      navigate("/shop");
    });
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerwrapper}>
        <div className={styles.left}>
          {ICONS.logoIconWhite}
          <img src={loginleft} alt="login" />
        </div>
        <div className={styles.right}>
          <div className={styles.greeting}>
            <h4>Welcome!</h4>
            <h6>Create your account</h6>
          </div>
          <div className={styles.fields}>
            <TextBox
              label="First name"
              placeholder="Enter first name"
              value={regData.first_name}
              setValue={(e) => setRegData({ ...regData, first_name: e })}
            />
            <TextBox
              label="Last name"
              placeholder="Enter last name"
              value={regData.last_name}
              setValue={(e) => setRegData({ ...regData, last_name: e })}
            />
            <TextBox
              label="Email"
              placeholder="Enter email"
              value={regData.email}
              setValue={(e) => setRegData({ ...regData, email: e })}
            />
            <Password
              label="Password"
              placeholder="Enter password"
              value={regData.password}
              setValue={(e) => setRegData({ ...regData, password: e })}
            />
            <Password
              label="Confirm Password"
              placeholder="Enter password again"
              value={regData.confirm_password}
              setValue={(e) => setRegData({ ...regData, confirm_password: e })}
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
            <Button onClick={registerHandler}> Sign up</Button>
            <Button theme="WHITE">{ICONS.google} Continue with Google </Button>
          </div>
          <div className={styles.bottomText}>
            <span>Already have an account?</span>{" "}
            <span onClick={() => navigate("/login")} className={styles.signin}>
              Signin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
