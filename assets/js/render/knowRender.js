import { know } from "../data/know-data.js";

export default function start() {

  const knowContainer = document.querySelector('.know-container');
  const knowDescriptionContainer = document.querySelector('.know-description');

  know.forEach(item => {
    knowContainer.innerHTML += `     
    <li class="know-item" >
      <h3>
        ${item.title}
      </h3>
    </li>
    `;
  });

  knowDescriptionContainer.innerHTML += `
    <h3>
      ${know[0].title}
      ${
        know[0].externalLink ? `
        <a href="${know[0].externalLink}" target="_blank"><img src="assets/images/external-link.png" alt=""></a>
        `: ""
      }
    </h3>
    <p>
      ${know[0].about}
    </p>
  `;

};