import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  adobexd,
  azure,
  bootstrap,
  jira,
  mongodb,
  mysql,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  python,
  gift,
  homewise,
  library,
  openai,
  portfolio,
  linamar,
  tcs,
  apisero,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "System Designing",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Azure Devops",
    icon: azure,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "AdobeXD",
    icon: adobexd,
  },
  {
    name: "JIRA",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Developer Co-op",
    company_name: "Linamar",
    icon: linamar,
    iconBg: "#333333",
    date: "Sep 2023 - Dec 2023",
    location: "Guelph, Canada",
  },
  {
    title: "Senior Software Engineer",
    company_name: "Apisero part of NTT Data Company",
    icon: apisero,
    iconBg: "#333333",
    date: "Sep 2021 - Aug 2023",
    location: "Noida, India",
  },
  {
    title: "Software Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#333333",
    date: "Jun 2019 - Sep 2021",
    location: "Gurgaon, India",
  },
];

const projects = [
  {
    id: "project-1",
    name: "HomeWise",
    description: "A realtor website where you can buy or sell properties",
    image: homewise,
    repo: "https://github.com/Shreyanshi-Vashistha/RealEstate_BackEnd",
    // demo: "https://github.com/Shreyanshi-Vashistha/RealEstate_FrontEnd",
  },
  {
    id: "project-2",
    name: "AI Image Generator",
    description: "An app that generates AI images using DALL-E OpenAI",
    image: openai,
    repo: "https://github.com/Shreyanshi-Vashistha/AI-Image-generator",
    demo: "https://ai-image-generator-client-4nio.onrender.com/",
  },
  {
    id: "project-3",
    name: "React JS Portfolio",
    description: "This is a single-page React js portfolio",
    image: portfolio,
    repo: "https://github.com/Shreyanshi-Vashistha/React.js-Portfolio",
    demo: "https://shreyanshi-vashistha.github.io/",
  },
  {
    id: "project-4",
    name: "Book Library",
    description: `A library book shop where you can find or delete book from your account`,
    image: library,
    repo: "https://github.com/Shreyanshi-Vashistha/BookLibrary-Node-MongoDb",
  },
  {
    id: "project-5",
    name: "Gift Shop Kiosk",
    description: "A giftshop kiosk website where you can buy gifts.",

    image: gift,
    repo: "https://github.com/Shreyanshi-Vashistha/GiftShop-Kiosk",
  },
];

export { services, technologies, experiences, projects };
