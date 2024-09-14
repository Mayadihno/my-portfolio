import { ICONS } from "@/utils/icons";

interface DataProps {
  id: number;
  name: string;
  path: string;
  icon: typeof ICONS.home;
}

export const sidebarData: DataProps[] = [
  {
    id: 1,
    name: "Home",
    path: "#",
    icon: ICONS.home,
  },
  {
    id: 2,
    name: "About",
    path: "#about",
    icon: ICONS.about,
  },
  {
    id: 3,
    name: "Work",
    path: "#work",
    icon: ICONS.work,
  },
  {
    id: 5,
    name: "Portfolio",
    path: "#portfolio",
    icon: ICONS.portfolio,
  },
  {
    id: 4,
    name: "Contact",
    path: "#contact",
    icon: ICONS.contact,
  },
];
