import { HomeIcon, BugIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import SimplifiedMDTInfo from "./pages/SimplifiedMDTInfo.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Maggot Therapy Info",
    to: "/maggot-therapy",
    icon: <BugIcon className="h-4 w-4" />,
    page: <SimplifiedMDTInfo />,
  },
];
