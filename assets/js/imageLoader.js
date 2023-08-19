export function imageLoader(className) {
  const loaderElement = document.querySelector(className);
  const imageElement = loaderElement.querySelector('img');

  imageElement.onload = () => {
    loaderElement.classList.add('loaded');
  };

};