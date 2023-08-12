export default function start() {
  const mobileBtn = document.querySelector("#mobile-button");
  const mobileMenu = document.querySelector("header .nav-links");
  function handleClick() {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  }

  mobileBtn.addEventListener("click", handleClick);
};