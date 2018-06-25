export let positionParalax = (function(options) {
  const ratio = 0.6645;
  let paralaxBlock = document.querySelector(options.paralaxBlock);

  return {
    set: function() {
      let paralaxBlockWidth = window.innerWidth,
        paralaxBlockHeight = window.innerHeight,
        paralaxCSS = paralaxBlock.style;

      if (paralaxBlockWidth > paralaxBlockHeight / ratio) {
        paralaxBlockHeight = paralaxBlockWidth * ratio;
        paralaxCSS.top = (window.innerHeight - paralaxBlockHeight) / 2 + "px";
        paralaxCSS.left = "0";
      } else {
        paralaxBlockWidth = paralaxBlockHeight / ratio;
        paralaxCSS.top = "0";
        paralaxCSS.left = (window.innerWidth - paralaxBlockWidth) / 2 + "px";
      }
      paralaxCSS.width = paralaxBlockWidth + "px";
      paralaxCSS.height = paralaxBlockHeight + "px";
    }
  };
})({
  paralaxBlock: ".paralax"
});

export let moveParalax = (function(options) {
  let paralaxBlock = document.querySelector(options.paralaxBlock),
    layers = Array.from(paralaxBlock.children);

  let _moveLayers = function(e) {
    const initialX = window.innerWidth / 2 - e.pageX,
      initialY = window.innerHeight / 2 - e.pageY;

    layers.forEach(function(layer, i) {
      let divider = i / 100,
        positionX = initialX * divider,
        positionY = initialY * divider * 2;

      layer.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
    });
  };

  let addListener = function() {
    window.addEventListener("mousemove", _moveLayers);
  };

  return {
    init: addListener
  };
})({
  paralaxBlock: ".paralax"
});
