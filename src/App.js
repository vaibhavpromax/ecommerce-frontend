import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import axios from "axios";
import styles from "./App.module.scss";
import RoleRoutes from "./rbac/RoleRoutes";
import NotFound from "./pages/NotFound/NotFound";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import RegisteredEmails from "./pages/Admin/RegisteredEmails/RegisteredEmails";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<UnderConstruction />} path="/"></Route> */}
          <Route element={<UnderConstruction />} path="/*"></Route>
          <Route element={<RegisteredEmails />} path="/admin/emails"></Route>

          {/* <Route path="/*" element={<RoleRoutes />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
