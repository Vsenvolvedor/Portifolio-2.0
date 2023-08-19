import colorRandomizer from "./colorRandomizer.js";
import { projects } from "./data/project-data.js";
import { imageLoader } from "./imageLoader.js";

export default function start() {
  const tvNavLinks = document.querySelectorAll('.tv-nav li');
  const tvContent = document.querySelector('.tv-content');

  function handleClick({target}) {
    tvNavLinks.forEach(link => {
      if(link.innerHTML.includes(target.innerHTML)) {
        const project = projects.find(project => link.innerHTML.includes(project.title));
        link.classList.add('active');
        tvContent.innerHTML = `
        <div class="project-image">
        <a class="project-image-link" href="${project.link}" target="_blank"><img src="${project.image}" alt="${project.title}"></a>
        ${project.repoLink ? `
         <a class="project-external-link"  href="${project.repoLink}">Code <img src="assets/images/external-link.png" alt="external link to project"></a>
        ` : ""}
      </div>
      <div class="project-info">
        <ul class="project-tech-list">
          ${project.techs.map((tech, index) => `
          <li class="${colorRandomizer(index)}" >
            <h3>
              ${tech}
            </h3>
          </li>
          `)}
        </ul>
        <p>
          ${project.about}
        </p>
      </div>
        `;

      imageLoader('.project-image-link');

      } else {
        link.classList.remove('active');
      }
    });
  };

  tvNavLinks.forEach(link => link.addEventListener('click', handleClick))
};