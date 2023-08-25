import AddProductPage from "../../../pages/Admin/AddProductPage/AddProductPage";
import AdminPage from "../../../pages/Admin/AdminPage/AdminPage";
import CouponManagement from "../../../pages/Admin/CouponManagement/CouponManagement";
import CustomerManagement from "../../../pages/Admin/CustomerManagement/CustomerManagement";
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
    link: "/customer",
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
    link: "/promotions",
    name: "coupons page",
    component: <CouponManagement />,
  },
];

export default ADMIN_ROUTES;
