import { ICONS } from "../../icons";
import Address from "./Components/Address/Address";
import Details from "./Components/Details/Details";
import History from "./Components/History/History";
import Notifications from "./Components/Notifications/Notifications";
import Passwords from "./Components/Passwords/Passwords";
import PaymentMethods from "./Components/PaymentMethods/PaymentMethods";

export const profileOptions = [
  {
    text: "Account Details",
    val: "ac",
    icon: ICONS.user,
    component: <Details />,
  },
  {
    text: "Your addresses",
    val: "add",
    icon: ICONS.mapPin,
    component: <Address />,
  },
  {
    text: "Order history",
    val: "hist",
    icon: ICONS.shoppingBag,
    component: <History />,
  },

  {
    text: "Manage passwords",
    val: "pass",
    icon: ICONS.key,
    component: <Passwords />,
  },

  {
    text: "Payment methods",
    val: "pay",
    icon: ICONS.credit,
    component: <PaymentMethods />,
  },
  {
    text: "Notification",
    val: "noti",
    icon: ICONS.bell,
    component: <Notifications />,
  },
];
