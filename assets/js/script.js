import startMobileMenu from "./MobileMenu.js";
import startPreload from "./Preload.js";

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