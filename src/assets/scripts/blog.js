import { menuOverlay } from "./modules/menu-overlay";
import { paralaxScroll } from "./modules/paralax-scroll-blog";

menuOverlay.init();

window.onscroll = function() {
  paralaxScroll.init(window.pageYOffset);
};
