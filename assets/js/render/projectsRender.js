import colorRandomizer from "../colorRandomizer.js";
import { projects } from "../data/project-data.js";

export default function start() {
  const tvNav = document.querySelector(".tv-nav ul");
  projects.forEach((project,index) => {

    tvNav.innerHTML += `
    <li class="${colorRandomizer(index)} ${index === 0 ? "active":""}" >
        <h3>${project.title}</h3>
    </li>
    `;
  });
};