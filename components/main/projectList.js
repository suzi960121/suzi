import project from "./project.js";

let projectsElement = document.getElementById("projectList");

// 이명박근혜
const projectData = [
  {
    start: `<section id="work" class="w-full pt-24 pb-14 flex flex-col gap-14">
    <ul class="flex flex-col gap-14"> 
    <li class="container flex-col gap-7 flex">`,
    rootUrl: "projects/jbbank.html",
    type: "big",
    imgUrl: "/img/projects/jbbank.png",
    workType: "",
    workCategory: "Work",
    projectTitle: "Money Transactions App & Web",
    projectDescription:
      "During my time at a web agency, I created JB BANK, a dynamic money transfer app and web platform catering to modern users' evolving needs.",
    end: `</li>`,
  },
  {
    start: `<li class="container gap-14 flex">`,
    rootUrl: "jewelry.html",
    type: "small",
    imgUrl: "/img/projects/jewelry.png",
    workType: "",
    workCategory: "Work",
    projectTitle: "Jewelry Trading Platform App",
    projectDescription:
      "I participated as an early member in designing and planning for the launch of a luxury jewelry trading platform service, contributing to essential screen designs like registration, detail, home, and login pages.",
    end: "",
  },
  {
    start: "",
    rootUrl: "",
    type: "small",
    imgUrl: "/img/projects/software.png",
    workType: "",
    workCategory: "Work",
    projectTitle: "Software Website",
    projectDescription:
      "Led website redesign for a nonprofit accounting software firm, prioritizing user-friendly design for efficient data management, focusing on the MZ generation and older demographics.",
    end: `
      </li>
      </ul>
    </section>`,
  },
  //Work Project

  {
    start: `<section id="side_project" class="w-full pt-24 pb-14 flex flex-col gap-14">
    <ul class="flex flex-col gap-14"> 
    <li class="container flex-col gap-7 flex">`,
    rootUrl: "/get.html",
    type: "big",
    imgUrl: "/img/projects/get.png",
    workType: "side",
    workCategory: "Side project",
    projectTitle: "iOS App Connecting Buyer & Seller ",
    projectDescription:
      "I led the planning and design of an iOS app for a sustainable production competition, targeting food waste through a collaborative platform for buyers and sellers, promoting eco-friendly habits in users' daily lives.",
    end: `</li>`,
  },
  {
    start: `<li class="container gap-14 flex">`,
    rootUrl: "lms.html",
    type: "small",
    imgUrl: "/img/projects/lms.png",
    workType: "side",
    workCategory: "Side project ",
    projectTitle: "The LMS Dashboard",
    projectDescription:
      "Renewal Project aims to create a new learning management and course administration system, while also upgrading the current system.",
    end: "",
  },
  {
    start: "",
    rootUrl: "",
    type: "small",
    imgUrl: "/img/projects/brandi.png",
    workType: "side",
    workCategory: "Side project ",
    projectTitle: "E-commerce Responsive Website",
    projectDescription:
      "Redesigning BRANDI, I focused on the 'Simple Is The Best' concept, aiming to enhance user experience by stimulating consumer psychology and ensuring simplicity and convenience. Additionally, I created a stylish, clean design with a youthful touch.",
    end: `
      </li>
      </ul>
    </section>`,
  },
  //Side Project

];

// 프로젝트 데이터를 사용하여 HTML 생성
let projectsHTML = projectData
  .map((이명박) => {
    return project(이명박);
  })
  .join("");

projectsElement.innerHTML = `
  ${projectsHTML}
`;
