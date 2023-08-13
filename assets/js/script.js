import startMobileMenu from "./MobileMenu.js";
import startPreload from "./Preload.js";
import startKnowChanger from "./knowChanger.js";
import startProjectChanger from "./projectChanger.js";
import knowRender from "./render/knowRender.js";
import projectsRender from "./render/projectsRender.js";

// Render

knowRender();
projectsRender();

// Js functions

startKnowChanger();
startProjectChanger();

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