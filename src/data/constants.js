import movies from "../images/movies.png";
import FitBit from "../images/FitBit.png";
import Restuarant from "../images/Restuarant.png";
import social from "../images/social.png";
export const Bio = {
  name: "Alphonsa Monalisa",
  roles: ["Front-End Developer", "UI/UX Designer", "Programmer"],
  description:
    "I am a dedicated frontend developer passionate about transforming visions into captivating, user-centric digital experiences. I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution in my domain",
  github: "https://github.com/Alphonsa-Monalisa",
  resume:
    "https://drive.google.com/file/d/1kvWGVL_XT1LoE1altk3khE2Jpi60ADmY/view?usp=sharing",
  email: "alphonsamonalisa19@gmail.com",
};

export const projects = [
  {
    id: 9,
    title: "Flavourfull Delights",
    description:
      "Flavourfull Delights is a web application is a responsive design, providing an engaging online presence for the restaurant. The website will offer users information about the restaurant, its menu, location, and contact details, utilizing a static site structure for straightforward navigation and an appealing layout.",
    image: Restuarant,
    tags: ["HTML", "CSS", "JavaScript", "Dark Theme", "Responsive Design"],
    github: "https://github.com/Alphonsa-Monalisa/Restuarant_web",
    livedemo: "https://alphonsa-monalisa.github.io/Restuarant_web/",
  },
  {
    id: 0,
    title: "MovieTime",

    description:
      "Developed a external API integrated web application that allows users to search for their favoraite movies using OMDB API",
    image: movies,
    tags: ["React Js", "API Integration", "Responsiveness"],
    category: "web app",
    github: "https://github.com/Alphonsa-Monalisa/Movies",
    livedemo: "https://alphonsa-monalisa.github.io/Movies/",
  },
  {
    id: 1,
    title: "FitZone",

    description:
      "FitZone gym website, a comprehensive digital platform crafted to elevate the fitness journey of users worldwide. Designed with a focus on user experience and functionality, this website embodies the ethos of FitZone",
    image: FitBit,
    tags: ["Tailwindcss", "JavaScript", "Animations"],
    category: "web app",
    github: "https://github.com/Alphonsa-Monalisa/Fitzone",
    livedemo: "https://alphonsa-monalisa.github.io/Fitzone/",
  },
  {
    id: 2,
    title: "SocialMedia Dashboard",

    description:
      "Designed a cutting-edge social media dashboard designed to revolutionize your online engagement. Our dashboard offers an intuitive interface, allowing users to effortlessly transition between light and dark modes for a personalized viewing experience.",
    image: social,
    tags: [
      "CSS",
      "HTML",
      "JavaScript",
      "Responsive design",
      "Light Mode",
      "Dark Mode",
    ],

    github: "https://github.com/Alphonsa-Monalisa/Dashboard",
    livedemo: "https://alphonsa-monalisa.github.io/Dashboard/",
  },
];
