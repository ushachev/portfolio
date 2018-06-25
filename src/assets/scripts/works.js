import { blur } from "./modules/blur";
import { menuOverlay } from "./modules/menu-overlay";
import { paralaxScroll } from "./modules/paralax-scroll";

menuOverlay.init();

window.onscroll = function() {
  paralaxScroll.init(window.pageYOffset);
};

blur.set();

window.onresize = function() {
  blur.set();
};
