import { know } from "./data/know-data.js";

export default function start() {
  const knowItens = document.querySelectorAll('.know-item');
  const knowDescription = document.querySelector('.know-description');

  function handleClick({target}) {
    const knowData = know.find(item => target.innerHTML.includes(item.title));
    knowDescription.innerHTML = `
      <h3>
        ${knowData.title}
        ${
          knowData.externalLink ? `
          <a href="${knowData.externalLink}" target="_blank"><img src="assets/images/external-link.png" alt=""></a>
          `: ""
        }
      </h3>
      <p>
        ${knowData.about}
      </p>
    `;
    knowItens.forEach(item => {
      if(item.contains(target)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active')
      }
    });

  };

  knowItens.forEach(item => item.addEventListener('click', handleClick));
};