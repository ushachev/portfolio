import "./modules/skills";
import "./modules/smooth-scroll";
import { menuOverlay } from "./modules/menu-overlay";
import { paralaxScroll } from "./modules/paralax-scroll";
import { preloader } from "./modules/preloader";

menuOverlay.init();

preloader.set();

window.onscroll = function() {
  paralaxScroll.init(window.pageYOffset);
};

window.onload = function() {
  preloader.load();
};
