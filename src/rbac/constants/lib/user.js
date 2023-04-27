import Contact from "../../../pages/User/Contact/Contact";
import FAQ from "../../../pages/User/FAQ/FAQ";
import GiftCard from "../../../pages/User/GiftCard/BuyGiftCard/BuyGiftCard";
import Home from "../../../pages/User/Home/Home";
import NotFound from "../../../pages/NotFound/NotFound";
import PrivacyPolicy from "../../../pages/User/PrivacyPolicy/PrivacyPolicy";
import Shop from "../../../pages/User/Shop/Shop";
import UserLogin from "../../../pages/User/UserLogin/UserLogin";

const USER_ROUTES = [
  {
    link: "/contact",
    name: "Contact",
    component: <Contact />,
    navbar: true,
    navbarVisible: true,
  },
  {
    link: "/faq",
    name: "FAQ",
    component: <FAQ />,
    navbar: false,
    navbarVisible: true,
  },
  {
    link: "/giftcard",
    name: "Giftcard",
    component: <GiftCard />,
    navbar: false,
    navbarVisible: true,
  },
  {
    link: "/home",
    name: "Home",
    component: <Home />,
    navbar: true,
    navbarVisible: true,
  },

  //   {
  //     link: "/notfound",
  //     name: "Notfound",
  //     component: <NotFound />,
  //     navbar: false,
  //     navbarVisible: true,
  //   },
  {
    link: "/policy",
    name: "Policy",
    component: <PrivacyPolicy />,
    navbar: false,
    navbarVisible: true,
  },
  {
    link: "/shop",
    name: "Shop",
    component: <Shop />,
    navbar: true,
    navbarVisible: true,
  },
  {
    link: "/login",
    name: "UserLogin",
    component: <UserLogin />,
    navbar: true,
    navbarVisible: false,
  },
];

export default USER_ROUTES;
