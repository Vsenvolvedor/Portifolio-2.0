export default function start() {
  const mobileBtn = document.querySelector("#mobile-button");
  const mobileMenu = document.querySelector("header .nav-links");
  function handleClick() {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    window.addEventListener('click', outsideClick);
  };

  function outsideClick({target}) {
    if(!mobileMenu.contains(target) && target !== mobileBtn) {
      mobileBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      removeEventListener('click', outsideClick);
    };

  };

  mobileBtn.addEventListener("click", handleClick);
};