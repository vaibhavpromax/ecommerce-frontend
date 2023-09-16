import { ICONS } from "../../icons";

export const adminOptions = [
  // {
  //   text: "Dashboard",
  //   val: "da",
  //   icon: ICONS.home,
  //   navigateTo: "/orders",
  // },
  {
    text: "Sales",
    val: "sa",
    icon: ICONS.briefCase,
    navigateTo: "/orders",
  },
  {
    text: "Product",
    val: "pro",
    icon: ICONS.shoppingBag,
    navigateTo: "/product",
  },

  {
    text: "Customers",
    val: "cus",
    icon: ICONS.cusotmers,
    navigateTo: "/customers",
  },

  {
    text: "Promotions",
    val: "promo",
    icon: ICONS.promotions,
    navigateTo: "/promotions",
  },
  {
    text: "Settings",
    val: "set",
    icon: ICONS.settings,
    navigateTo: "/settings",
  },
];
