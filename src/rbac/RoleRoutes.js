import { ROLE_ROUTES } from "./constants/index";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

//styles
import styles from "./RoleRoutes.module.scss";
import NotFound from "../pages/NotFound/NotFound";

//context
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar/Sidebar";
//components

const RoleRoutes = () => {
  //   const { admin } = useAuth();
  const { user, session } = useAuth();
  const admin = { accessToken: "123" };
  const location = useLocation();
  return (
    <div className={styles.routePageContainer}>
      <div className={styles.blur}>
        <>
          <Sidebar />
          <div className={styles.routeContainer}>
            <Routes>
              {ROLE_ROUTES["admin"].map((route) => {
                return (
                  route.private && (
                    <Route
                      path={route.link}
                      key={route.name}
                      element={
                        admin?.accessToken ? (
                          route.component
                        ) : (
                          <Navigate to="/login" />
                        )
                      }
                    />
                  )
                );
              })}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </>
      </div>
    </div>
  );
};

export default RoleRoutes;
