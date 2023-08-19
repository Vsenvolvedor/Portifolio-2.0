import colorRandomizer from "../colorRandomizer.js";
import { projects } from "../data/project-data.js";
import { imageLoader } from "../imageLoader.js";

export default function start() {
  const tvNav = document.querySelector(".tv-nav ul");
  const tvContent = document.querySelector(".tv-content");
  projects.forEach((project,index) => {
    tvNav.innerHTML += `
    <li class="${colorRandomizer(index)} ${index === 0 ? "active":""}" >
        <h3>${project.title}</h3>
    </li>
    `;
  });

  tvContent.innerHTML = `
  <div class="project-image">
    <a class="project-image-link" href="${projects[0].link}" target="_blank"><img src="${projects[0].image}" alt="${projects[0].title}"></a>
    ${projects[0].repoLink ? `
     <a class="project-external-link"  href="${projects[0].repoLink}">Code <img src="assets/images/external-link.png" alt="external link to project"></a>
    ` : ""}
  </div>
  <div class="project-info">
    <ul class="project-tech-list">
      ${projects[0].techs.map((tech, index) => `
      <li class="${colorRandomizer(index)}" >
        <h3>
          ${tech}
        </h3>
      </li>
      `)}
    </ul>
    <p>
      ${projects[0].about}
    </p>
  </div>
  `;

  imageLoader('.project-image-link');
};