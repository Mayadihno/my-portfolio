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
    name: "About Me",
    path: "#about me",
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
    period: "Feb 2024 - May 2024",
    description: [
      "I contributed to the company's primary platform, focusing on enhancing its investment and wealth creation features. I also worked on a project aimed at expanding accessibility to a broader audience, developing key functionalities to support that mission.",
      "During my time there, I developed proficiency in cutting-edge technologies, specializing in React, TypeScript, Next.js, Tailwind CSS, and Material UI. I designed components, optimized code, integrated APIs, and created documentation to support project development and team collaboration.",
    ],
    icon: ICONS.work,
  },
  {
    title: "Frontend Engineer",
    company: "Venture Garden Group",
    location: "Lagos, Nigeria",
    period: "Jun 2023 - Dec 2023",
    description: [
      "In my role, I played a key part in the development, testing, and maintenance of the finance platform, focusing on delivering a seamless user experience. I implemented core features, optimized performance, and improved platform stability, contributing to the overall efficiency and reliability of the system.",
      "I played a key role in building a dynamic web application, focusing on developing highly reusable components and integrating complex APIs. I collaborated closely with designers to transform design concepts into pixel-perfect, responsive interfaces. Utilizing modern web technologies such as React, TypeScript, MUI, and Tailwind CSS, I ensured seamless functionality, optimized performance, and a consistent user experience across various devices and browsers.",
    ],
    icon: ICONS.work,
  },

  {
    title: "Frontend Engineer (Freelance)",
    company: "Atoms Technologies",
    location: "Lagos, Nigeria",
    period: "May 2022 - Oct 2022",
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
    period: "Jul 2021 - Dec 2021",
    description: [
      "I collaborated within a dynamic development team, crafting innovative web apps for public use. This joint endeavor not only broadened my technical skills but also equipped me to effectively leverage emerging technologies.",
      "I played a crucial role in the development of an all-encompassing online culinary platform, integrating webinars, classrooms, pre-ordering, quizzes, payments, and subscriptions, using React, Redux and CSS.",
    ],
    icon: ICONS.work,
  },
];

export const education = [
  {
    title: "BTech. in Industrial Chemistry",
    company: "Federal University Of Technology Akure (FUTA)",
    location: "Akure, Nigeria",
    period: "Jan 2018 - Dec 2023",
    description: [
      "My educational journey is characterized by academic excellence and a broad range of knowledge. With a CGPA of 4.39 out of 5.0, I have completed my academic endeavors with dedication, achieving exceptional results in my quest for knowledge.",
    ],
    icon: ICONS.education,
  },
  {
    title: "React Developer ZeroToMastery",
    company: "Udemy",
    location: "Online",
    period: "Jul 2021 - Nov 2021",
    description: [
      "The immersive ZTZ course delivered an in-depth learning experience, equipping learners with essential technical skills for web and mobile app development. Its curriculum thoughtfully covered crucial topics, emphasizing key areas such as:",
      "React Fundamentals",
      "React and Redux",
      "React Typescript",
      "Next Js",
    ],
    icon: ICONS.education,
  },
];

export const skills = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    name: "TypeScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    name: "React",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "Tailwind",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MUI",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    name: "Ant Design",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
  },
  {
    name: "Bootstrap",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "SASS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
  {
    name: "Redux",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "Axios",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg",
  },
  {
    name: "Node.Js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express Js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  },
  {
    name: "Firebase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "Prisma",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
  },
  {
    name: "Mongoose",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
  },
  {
    name: "MongoDb",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "Git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Github",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Npm",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Notion",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
  },
  {
    name: "Slack",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
  },
  {
    name: "Figma",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "VScode",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "Netlify",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg",
  },
  {
    name: "Vercel",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  },
];

export const contact = [
  {
    id: 1,
    text: "Lagos, Nigeria.",
    icon: ICONS.location,
  },
  {
    id: 2,
    text: "(+234) 8136908207",
    icon: ICONS.phone,
  },
  {
    id: 3,
    text: "mayadihno@gmail.com",
    icon: ICONS.contact,
  },
];
