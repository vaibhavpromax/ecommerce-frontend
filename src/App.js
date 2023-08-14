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
import OrderManagement from "./pages/Admin/OrderManagement/OrderManagement";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route element={<RegisteredEmails />} path="/emails"></Route>
          <Route path="/" element={<OrderManagement />}></Route>
          <Route
            path="/*"
            element={
              <AuthProvider>
                <RoleRoutes />
              </AuthProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
