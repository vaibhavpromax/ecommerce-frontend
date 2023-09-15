import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.scss";
import RoleRoutes from "./rbac/RoleRoutes";
import RegisteredEmails from "./pages/Admin/RegisteredEmails/RegisteredEmails";
import { useEffect, useState } from "react";
import AuthProvider from "./contexts/AuthContext";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";

function App() {
  return (
    <div className={styles.app}>
      
      <BrowserRouter>
        <Routes>
          <Route element={<RegisteredEmails />} path="/emails"></Route>
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
