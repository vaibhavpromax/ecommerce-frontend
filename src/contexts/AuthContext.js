import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserAuthentication from "../apis/userAuthentication";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const init = async () => {
    // const token = ;
    // console.log(authenticated, token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      JSON.parse(localStorage.getItem("user"))?.token
    }`;
    setAuthenticated(true);
    // setLoading(false);
  };

  useEffect(() => {
    init();
    console.log(user);
  }, [user]);

  return authenticated ? (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  ) : (
    `Loading`
  );
};
export default AuthProvider;
