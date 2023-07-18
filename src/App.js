import { Route, Routes, BrowserRouter } from "react-router-dom";

import styles from "./App.module.scss";
import RoleRoutes from "./rbac/RoleRoutes";

//import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
//import RegisteredEmails from "./pages/Admin/RegisteredEmails/RegisteredEmails";
//import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<UnderConstruction />} path="/"></Route> */}
          {/* <Route element={<UnderConstruction />} path="/*"></Route> */}
          {/* <Route element={<RegisteredEmails />} path="/admin/emails"></Route> */}
           {/* <Route element={<NotFound/>} path="/notfound"></Route>  */}
          <Route path="/*" element={<RoleRoutes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
