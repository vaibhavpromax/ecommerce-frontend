import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserAuthentication from "../apis/userAuthentication";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));

  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const init = async () => {
    // let token;
    // if (admin) token = admin?.token;
  
    setAuthenticated(true);
  };

  useEffect(() => {
    init();
  }, [admin]);

  // useEffect(() => {
  //   fetchSession();
  // }, []);

  return authenticated ? (
    <AuthContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  ) : (
    `Loading`
  );
};
export default AuthProvider;
