import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.scss";
import RoleRoutes from "./rbac/RoleRoutes";
import NotFound from "./pages/NotFound/NotFound";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import RegisteredEmails from "./pages/Admin/RegisteredEmails/RegisteredEmails";
import Profile from "./pages/Profile/Profile";
import { useEffect, useState } from "react";
import UserLogin from "./pages/User/UserLogin/UserLogin";
import UserRegister from "./pages/User/UserRegister/UserRegister";
import AuthProvider from "./contexts/AuthContext";
import Home from "./pages/User/Home/Home";
import StripeWrapper from "./StripeWrapper";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<UnderConstruction />} path="/"></Route> */}
          {/* <Route element={<UnderConstruction />} path="/*"></Route> */}
          {/* <Route element={<RegisteredEmails />} path="/admin/emails"></Route> */}
          {/* <Route element={<NotFound />} path="/not-found"></Route> */}
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/*"
            element={
              <GoogleOAuthProvider
                clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
              >
                <AuthProvider>
                  <RoleRoutes />
                </AuthProvider>
              </GoogleOAuthProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
