import startMobileMenu from "./MobileMenu.js";
import startPreload from "./Preload.js";
import knowRender from "./render/knowRender.js";

// Render

knowRender();

// Js functions

let alreadyOn =  false;

if(window.innerWidth < 720 && !alreadyOn) {
  startMobileMenu();
  alreadyOn = true;
}

window.onresize = () => {
  if(window.innerWidth < 720 && !alreadyOn) {
    startMobileMenu();
    alreadyOn = true;
  }
 };
startPreload();