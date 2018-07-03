import "./modules/slider";
import "./modules/feedback";
import { blur } from "./modules/blur";
import { menuOverlay } from "./modules/menu-overlay";
import { paralaxScroll } from "./modules/paralax-scroll";
import { preloader } from "./modules/preloader";

preloader.set();

menuOverlay.init();

blur.set();

window.onload = function() {
  preloader.load();
};

window.onscroll = function() {
  paralaxScroll.init(window.pageYOffset);
};

window.onresize = function() {
  blur.set();
};
