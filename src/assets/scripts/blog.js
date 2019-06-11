import "./modules/menu";
import "./modules/posts";
import "./modules/smooth-scroll";
import { menuOverlay } from "./modules/menu-overlay";
import { paralaxScroll } from "./modules/paralax-scroll-blog";
import { postMenuScroll } from "./modules/post-menu-scroll";
import { preloader } from "./modules/preloader";

const scrollObj = {
  postMenu: ".blog__sidebar",
  postList: ".blog__list",
  menuBtn: ".blog__sidebar-btn",
  menuItem: "post-menu__item",
  postTitle: ".post__title"
};

menuOverlay.init();

preloader.set();

window.onload = function() {
  const scrollBlog = postMenuScroll(scrollObj);

  preloader.load();
  scrollBlog.set();

  window.onscroll = function() {
    let wScroll = window.pageYOffset;

    scrollBlog.init(wScroll);
    scrollBlog.indicate(wScroll);
  };
};

window.onscroll = function() {
  paralaxScroll.init(window.pageYOffset);
};

window.onresize = function() {
  postMenuScroll(scrollObj).hide();
};
