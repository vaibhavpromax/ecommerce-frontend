import { ROLE_ROUTES } from "./constants/index";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

//styles
import styles from "./RoleRoutes.module.scss";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../pages/NotFound/NotFound";

//context

//components

const ROUTES_WITH_NAVBAR = ROLE_ROUTES["user"]?.filter(
  (route) => route.navbarVisible === true
);

const RoleRoutes = () => {
  const ROUTES_NAVBAR = ROLE_ROUTES["user"]?.filter(
    (route) => route.navbar === true
  );
  //   const { admin } = useAuth();
  const admin = { accessToken: "123" };
  const location = useLocation();
  return (
    <div className={styles.routePageContainer}>
      <div className={styles.blur}>
        <>
          {/* {ROUTES_WITH_NAVBAR?.some(
            (route) => route.link === location.pathname
          ) && ( */}
          <div className={styles.navbar}>
            <Navbar routes={ROUTES_NAVBAR} />
          </div>
          {/* )} */}
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
                          <Navigate to="/admin/login" />
                        )
                      }
                    />
                  )
                );
              })}
              {ROLE_ROUTES["user"].map((route) => {
                return (
                  <Route
                    path={route.link}
                    key={route.name}
                    element={route.component}
                  />
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