import { ICONS } from "@/utils/icons";

interface DataProps {
  id: number;
  name: string;
  path: string;
  icon: typeof ICONS.home;
}

interface BannerProp extends Omit<DataProps, "name" | "path"> {
  link: string;
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

export const bannerIcon: BannerProp[] = [
  {
    id: 1,
    icon: ICONS.github,
    link: "https://github.com/Mayadihno",
  },
  {
    id: 2,
    icon: ICONS.linkedin,
    link: "https://www.linkedin.com/in/maya-tunde-olawale-404050225",
  },
  {
    id: 3,
    icon: ICONS.twitter,
    link: "https://x.com/Mayadihno2",
  },
  {
    id: 4,
    icon: ICONS.whatsapp,
    link: "https://wa.me/+2348136908207",
  },
  {
    id: 5,
    icon: ICONS.contact,
    link: "mailto:mayadihno@gmail.com",
  },
];
