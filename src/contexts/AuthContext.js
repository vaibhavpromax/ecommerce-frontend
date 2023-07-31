import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserAuthentication from "../apis/userAuthentication";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem("session"))
  );
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { getSession } = useUserAuthentication();

  const fetchSession = async () => {
    if (!session) {
      await getSession((data) => {
        localStorage.setItem("session", JSON.stringify(data.data));
        setSession(JSON.stringify(data.data));
        setAuthenticated(true);
      });
    } else return;
  };

  const init = async () => {
    let token;
    if (session) token = session?.token;
    if (user) token = user?.token;
    else {
      await fetchSession();
      console.log(authenticated);
      console.log(session);
      token = session?.token;
    }
    console.log(authenticated, token);
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
    <AuthContext.Provider value={{ user , session }}>{children}</AuthContext.Provider>
  ) : (
    `Loading`
  );
};
export default AuthProvider;
