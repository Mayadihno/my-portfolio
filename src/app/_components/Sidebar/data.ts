import { ICONS } from "@/utils/icons";
import { FaBriefcase, FaLaptopCode, FaBuilding } from "react-icons/fa";
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

export const experiences = [
  {
    title: "Frontend Engineer",
    company: "Phonix Dev",
    location: "Lagos, Nigeria",
    period: "Mar 2022 - May 2024",
    description: [
      "I've worked on Rise, the company's main platform for dollar investments and wealth creation. Currently, I'm focused on a project called Assetbase, aimed at making private investments accessible to a broader audience beyond institutions and the ultra-wealthy.",
      "During my time here, I've cultivated proficiency in cutting-edge technologies, specializing in React, TypeScript, Next.js, Tailwind CSS, and Material UI to design components, optimize code, consume APIs, and create documentation to support our projects.",
    ],
    icon: ICONS.work,
  },
  {
    title: "Frontend Engineer",
    company: "Venture Garden Group",
    location: "Lagos, Nigeria",
    period: "Dec 2021 - Dec 2022",
    description: [
      "In my role, I actively contributed to VPay Africa's development, testing, and maintenance, ensuring a smooth and user-friendly finance platform. This included crafting essential features and enhancing overall robustness.",
      "I worked on the Artsplit project, an ecosystem for art enthusiasts to explore, acquire, and sell artworks. I created reusable components, integrated APIs, and transformed design concepts into pixel-perfect interfaces using React, TypeScript, Ant Design, and CSS/SASS.",
    ],
    icon: ICONS.work,
  },

  {
    title: "Frontend Engineer (Freelance)",
    company: "Exact Technologies",
    location: "Lagos, Nigeria",
    period: "May 2021 - Oct 2021",
    description: [
      "As the sole developer, I undertook a significant role in the development of the website designed to embody the essence of the brand while enlightening potential clients about the diverse range of services offered.",
      "My responsibilities involved crafting a user-centric experience that seamlessly blended aesthetic appeal with informative content. This involved thoroughly structuring the layout, selecting appropriate color palettes, and ensuring a coherent flow that guided visitors through the platform.",
    ],
    icon: ICONS.work,
  },
  {
    title: "Frontend Engineer (Intern)",
    company: "Exact Technologies",
    location: "Lagos, Nigeria",
    period: "Jul 2021 - Aug 2021",
    description: [
      "I collaborated within a dynamic development team, crafting innovative web apps for public use. This joint endeavor not only broadened my technical skills but also equipped me to effectively leverage emerging technologies.",
      "I played a crucial role in the development of an all-encompassing online culinary platform, integrating webinars, classrooms, pre-ordering, quizzes, payments, and subscriptions, using React, Typescript, Redux and CSS/SASS.",
    ],
    icon: ICONS.work,
  },
];
