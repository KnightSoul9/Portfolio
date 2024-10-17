import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  pic1,
  pic2,
  pic3,
  pic4,
  celebal,
  xplainerr,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "BlockChain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Celebal Technologies",
    icon: celebal,
    iconBg: "#383E56",
    date: "August 2024 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designed and implemented complex forms and dash-boards without relying on external libraries, ensuring optimized performance and custom functionality.",
      "Gained hands-on experience in full-stack development,including front-end design, API integration, and database management.",
      "Tech Stack - HTML, Tailwind CSS, JS, ReactJS",
    ],
  },
  {
    title: "Product Intern",
    company_name: "Xplainerr",
    icon: xplainerr,
    iconBg: "#383E56",
    date: "August 2022 - November 2022",
    points: [
      "Gained insights into product strategy and user research by interacting with Product Managers.",
      "Learned about feature prioritization and decision-making in product development.",
      "Understood the importance of cross-functional collaboration with teams like engineering and design.",
      "Developed a well-rounded perspective on creating, launching, and iterating on products.",
      ,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Music Player",
    description:
      "Built a full-stack music player web app using HTML,React, Tailwind CSS, MongoDB, Express, and Node.js, allowing users to upload, manage, and play songs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pic1,
    source_code_link: "https://github.com/KnightSoul9/Music_Player",
  },
  {
    name: "Travel Tour",
    description:
      "Built a travel tour website using React and TailwindCSS, focusing on creating a highly responsive and fast user experience. The site is optimized for both mobile and desktop users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pic2,
    source_code_link: "https://github.com/KnightSoul9/Travel_Tour",
  },
  {
    name: "Currency Converter",
    description:
    "Built a currency converter website that leverages an API to provide real-time currency conversion. The interface allows users to easily convert between any currencies.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pic4,
    source_code_link: "https://github.com/KnightSoul9/Currency_Converter",
  },
];

export { services, technologies, experiences, testimonials, projects };
