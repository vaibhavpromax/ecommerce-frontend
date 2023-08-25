import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserAuthentication from "../apis/userAuthentication";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const init = async () => {
    let token;
    if (admin) token = admin?.token;

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setAuthenticated(true);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  // useEffect(() => {
  //   fetchSession();
  // }, []);

  return authenticated ? (
    <AuthContext.Provider value={{ admin }}>{children}</AuthContext.Provider>
  ) : (
    `Loading`
  );
};
export default AuthProvider;
