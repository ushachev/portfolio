export let paralaxScroll = (function(options) {
  let bg = document.querySelector(options.bg),
    bgText = document.querySelector(options.bgText);

  let _scroll = function(block, windowScroll, strafeAmount) {
    let strafe = windowScroll / -strafeAmount + "%";

    block.style.webkitTransform = `translate3d(0, ${strafe}, 0)`;
    block.style.transform = `translate3d(0, ${strafe}, 0)`;
  };

  return {
    init: function(wScroll) {
      _scroll(bg, wScroll, 35);
      _scroll(bgText, wScroll, 25);
    }
  };
})({
  bg: ".start__bg",
  bgText: ".start__info"
});
