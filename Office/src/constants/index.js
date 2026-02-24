const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#skills",
  },
];

const techStackIcons = [
  {
    name: "Kawaii Treats",
    modelPath: "/models/kawaii.glb",
    description:
      "A dessert showcase website built with vanilla JavaScript, HTML, and CSS. Features an interactive gallery with animations and responsive design.",
    github: "https://github.com/LennyDickey/kawaii-treats",
    scale: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "Student Fund",
    modelPath: "/models/fund.glb",
    description:
      "App for economic mobility for students, were students can submit data about their career intentions that leads to non-profits resources.",
    github: "https://github.com/LennyDickey/counselor",
    scale: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "C# Server",
    modelPath: "/models/csharp.glb",
    description:
      "a .NET C# REST API backend that fetches data from a MySQL DB that allows you create new entries, read, delete.",
    github: "https://github.com/LennyDickey/CSharpServer",
    scale: 4,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "b.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Software Engineer",
    name: "Bank of America",
    date: "Jan 2020 - Present",
    responsibilities: [
      "Created test plans and cases, validated data across reports and databases for accuracy and consistency.",
      "Collaborated with offshore teams on internal projects focusing on Consumer Business and Wealth Management Technology.",
      "Ensured deployed code functions as intended through test data generation, defect managing and reporting adherence to compliance requirements.",
    ],
  },
  {
    review: "b.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Computational Media Artist",
    name: "Just Lenny LLC",
    date: "Feb 2021 - Present",
    responsibilities: [
      "Prototype and build expressive, browser-based experiences using HTML, SCSS, JavaScript, React, Three.js, and Blender, blending code, creativity and care.",
      "Lead community-centered tech initiatives, including founding a grassroots reparation fund and teaching digital skills workshops through a mutual aid networks.",
      "Apply systems thinking and interdisciplinary research to develop expressive, equity-driven interfaces that integrate cultural memory, storytelling, and user-centered design.",
    ],
  },
  {
    review: "b.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Front-End Developer",
    name: "Red Ventures",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Led UX-focused development of 5+ web apps that integrated with marketing automation platforms to enhance customer engagement and functionality.",
      "Promoted team collaboration and productivity through Git-based version control. Focused on an effective development process, enhancing overall team productivity.",
      "Excelled in an Agile work environment, accelerating delivery timelines and early project completions.",
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "",
  },
  {
    name: "cv",
    imgPath: "/images/cv.png",
    link: "",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/LennyDickey",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/lendickey",
  },
];

export { expCards, socialImgs, techStackIcons, navLinks };
