import AddProductPage from "../../../pages/Admin/AddProductPage/AddProductPage";
import AdminLogin from "../../../pages/Admin/AdminLogin/AdminLogin";
import AdminPage from "../../../pages/Admin/AdminPage/AdminPage";
import CouponManagement from "../../../pages/Admin/CouponManagement/CouponManagement";
import CustomerManagement from "../../../pages/Admin/CustomerManagement/CustomerManagement";
import CustomerPage from "../../../pages/Admin/CustomerPage/CustomerPage";
import EditProductPage from "../../../pages/Admin/EditProductPage/EditProductPage";
import OrderDetails from "../../../pages/Admin/OrderDetails/OrderDetails";
import OrderManagement from "../../../pages/Admin/OrderManagement/OrderManagement";
import ProductManagement from "../../../pages/Admin/ProductManagement/ProductManagement";

const ADMIN_ROUTES = [
  {
    private: true,
    link: "/settings",
    name: "Admin",
    component: <AdminPage />,
  },
  {
    private: true,
    link: "/orders",
    name: "order page",
    component: <OrderManagement />,
  },
  {
    private: true,
    link: "/order/:id",
    name: "order info page",
    component: <OrderDetails />,
  },
  {
    private: true,
    link: "/customers",
    name: "customer page",
    component: <CustomerManagement />,
  },
  {
    private: true,
    link: "/product",
    name: "product page",
    component: <ProductManagement />,
  },
  {
    private: true,
    link: "/add-product",
    name: "add product",
    component: <AddProductPage />,
  },
  {
    private: true,
    link: "/edit-product/:id",
    name: "edit product",
    component: <EditProductPage />,
  },
  {
    private: true,
    link: "/customer/:id",
    name: "Customer page",
    component: <CustomerPage />,
  },
  {
    private: true,
    link: "/promotions",
    name: "coupons page",
    component: <CouponManagement />,
  },
  {
    private: false,
    link: "/",
    name: "admin login",
    component: <AdminLogin />,
  },
];

export default ADMIN_ROUTES;
