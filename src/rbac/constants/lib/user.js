import Contact from "../../../pages/User/Contact/Contact";
import FAQ from "../../../pages/User/FAQ/FAQ";
import GiftCard from "../../../pages/User/GiftCard/BuyGiftCard/BuyGiftCard";
import Home from "../../../pages/User/Home/Home";
import NotFound from "../../../pages/NotFound/NotFound";
import PrivacyPolicy from "../../../pages/User/PrivacyPolicy/PrivacyPolicy";
import Shop from "../../../pages/User/Shop/Shop";
import UserLogin from "../../../pages/User/UserLogin/UserLogin";
import Profile from "../../../pages/Profile/Profile";
import Cart from "../../../pages/Cart/Cart";
import Wishlist from "../../../pages/Wishlist/Wishlist";
import UserRegister from "../../../pages/User/UserRegister/UserRegister";
import Product from "../../../pages/Product/Product";
import Checkout from "../../../pages/Checkout/Checkout";
import Stripe from "../../../StripeWrapper";

const USER_ROUTES = [
  {
    private: false,
    link: "/contact",
    name: "Contact",
    component: <Contact />,
    navbar: true,
    navbarVisible: true,
    transparentNavbar: false,
  },
  {
    private: false,
    link: "/faq",
    name: "FAQ",
    component: <FAQ />,
    navbar: false,
    transparentNavbar: false,
    navbarVisible: true,
  },
  {
    private: false,
    link: "/giftcard",
    name: "Giftcard",
    component: <GiftCard />,
    navbar: false,
    transparentNavbar: false,
    navbarVisible: true,
  },
  // {
  //   private: false,
  //   link: "/",
  //   name: "Home",
  //   component: <Home />,
  //   //navbar: true,
  //   // transparentNavbar: true,
  //   //navbarVisible: true,
  // },

  //   {
  //     link: "/notfound",
  //     name: "Notfound",
  //     component: <NotFound />,
  //     navbar: false,
  //     navbarVisible: true,
  //   },
  {
    private: false,
    link: "/policy",
    name: "Policy",
    component: <PrivacyPolicy />,
    transparentNavbar: false,
    navbar: false,
    navbarVisible: true,
  },
  {
    private: false,
    link: "/shop",
    name: "Shop",
    component: <Shop />,
    navbar: true,
    transparentNavbar: false,
    navbarVisible: true,
  },
  {
    private: true,
    link: "/profile",
    name: "Profile",
    component: <Profile />,
    navbar: true,
    transparentNavbar: false,
    navbarVisible: true,
  },
  {
    private: false,
    link: "/cart",
    name: "Cart",
    component: <Cart />,
    navbar: true,
    transparentNavbar: false,
    navbarVisible: true,
  },
  {
    private: false,
    link: "/wishlist",
    name: "Wishlist",
    component: <Wishlist />,
    navbar: true,
    transparentNavbar: false,
    navbarVisible: true,
  },
  {
    private: true,
    link: "/checkout",
    name: "Checkout",
    component: (
      <Stripe>
        <Checkout />
      </Stripe>
    ),
    navbar: true,
    transparentNavbar: false,
    navbarVisible: true,
  },
  {
    private: false,
    link: "/product/:id",
    name: "Product",
    component: <Product />,
    navbar: true,
    transparentNavbar: false,
    navbarVisible: true,
  },
  {
    private: false,
    link: "/login",
    name: "login",
    component: <UserLogin />,
    navbar: false,
    transparentNavbar: false,
    navbarVisible: false,
  },

  {
    private: false,
    link: "/register",
    name: "Register",
    component: <UserRegister />,
    navbar: false,
    transparentNavbar: false,
    navbarVisible: false,
  },
];

export default USER_ROUTES;
