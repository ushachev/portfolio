export let menuOverlay = (function(options) {
  const button = document.querySelector("." + options.button),
    menu = document.querySelector("." + options.menu),
    menuItems = menu.querySelectorAll("." + options.menuItem);

  let counter = 0;

  let _menuAnimation = function() {
    menuItems[counter].classList.toggle(options.menuItem + "_overlay");
    counter++;
    if (counter < menuItems.length) {
      setTimeout(_menuAnimation, 100);
    } else {
      counter = 0;
    }
  };

  let _toggleOverlay = function() {
    button.classList.toggle("is-active");
    menu.classList.toggle(options.menu + "_overlay");
    document.querySelector("body").classList.toggle("scroll-off");
    setTimeout(_menuAnimation, 600);
  };

  let addListeners = function() {
    button.addEventListener("click", _toggleOverlay);
    menu.addEventListener("click", function(e) {
      if (e.target.className === options.menuLink) {
        _toggleOverlay();
      }
    });
  };

  return {
    init: addListeners
  };
})({
  button: "hamburger",
  menu: "header__nav",
  menuItem: "header__nav-item",
  menuLink: "header__nav-link"
});
