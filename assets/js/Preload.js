export default function start() {
  const preload = document.querySelector("#preload");

  window.onload = () => {
    document.body.style.overflowY = 'auto';
    preload.style.display = 'none';
  };

};