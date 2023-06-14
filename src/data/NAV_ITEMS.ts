import { ElementType } from "react";
import {
  CiCircleInfo,
  CiCircleMinus,
  CiGrid31,
  CiShop,
  CiUser,
} from "react-icons/ci";

type INavItem = {
  label: string;
  url: string;
  icon: ElementType<any>;
};

export const navItems: Array<INavItem> = [
  {
    label: "Home",
    url: "/",
    icon: CiGrid31,
  },
  {
    label: "Orders",
    url: "/orders",
    icon: CiShop,
  },
  {
    label: "Stuff",
    url: "/stuff",
    icon: CiUser,
  },
];

export const settingNavItems: Array<INavItem> = [
  {
    label: "Help & information",
    url: "/support",
    icon: CiCircleInfo,
  },
  {
    label: "Log Out",
    url: "/logut",
    icon: CiCircleMinus,
  },
];
