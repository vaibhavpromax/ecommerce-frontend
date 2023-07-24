import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      if (user) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${user?.token}`;
        setLoading(false);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    };
    init();
  }, [user]);

  useEffect(() => {
    if (authenticated === false) {
      navigate("/login");
    }
  }, [authenticated]);

  return authenticated ? (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  ) : (
    `Loading`
  );
};
export default AuthProvider;
