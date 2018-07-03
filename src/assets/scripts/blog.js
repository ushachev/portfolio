import "./modules/smooth-scroll";
import { menuOverlay } from "./modules/menu-overlay";
import { paralaxScroll } from "./modules/paralax-scroll-blog";
import { postMenuScroll } from "./modules/post-menu-scroll";
import { preloader } from "./modules/preloader";

menuOverlay.init();

preloader.set();

window.onload = function() {
  preloader.load();
  postMenuScroll.set();
};

window.onscroll = function() {
  let wScroll = window.pageYOffset;

  paralaxScroll.init(wScroll);
  postMenuScroll.init(wScroll);
  postMenuScroll.indicate(wScroll);
};

window.onresize = function() {
  postMenuScroll.hide();
};
