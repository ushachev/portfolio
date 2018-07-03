export let paralaxScroll = (function(options) {
  let bg = document.querySelector(options.bg),
    bgText = document.querySelector(options.bgText),
    author = document.querySelector(options.author);

  let _scroll = function(block, windowScroll, strafeAmount) {
    let strafe = windowScroll / -strafeAmount + "%";

    block.style.webkitTransform = `translate3d(0, ${strafe}, 0)`;
    block.style.transform = `translate3d(0, ${strafe}, 0)`;
  };

  return {
    init: function(wScroll) {
      _scroll(bg, wScroll, 40);
      _scroll(bgText, wScroll, 10);
      _scroll(author, wScroll, 10);
    }
  };
})({
  bg: ".start__bg",
  bgText: ".start__info",
  author: ".author"
});
