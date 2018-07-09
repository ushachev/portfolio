export let preloader = (function(options) {
  const preloader = document.querySelector(`.${options.preloader}`),
    percentBlock = document.querySelector(`.${options.percentBlock}`),
    perBlock = document.querySelector(".preloader__per"),
    images = document.images,
    imagesTotalCount = images.length;
  let imagesLoadedCount = 0,
    percent = 0,
    percentShown = 0;

  let _percentAnimationTest = function() {
    let percentTest = 0,
      interval = setInterval(function() {
        percentTest++;
        perBlock.textContent = `${percentTest}%`;
        if (percentTest >= 100) {
          clearInterval(interval);
        }
      }, 50);
  };

  let _percentAnimation = function() {
    if (percent < 100) {
      percentShown++;
      percentBlock.textContent = `${percentShown}%`;
      if (percentShown < percent) {
        setTimeout(_percentAnimation, 50);
      }
    } else {
      percentBlock.textContent = "100%";
    }
  };

  let _imageLoaded = function() {
    imagesLoadedCount++;
    percent = ((imagesLoadedCount / imagesTotalCount) * 100) << 0;
    // percentBlock.textContent = `${percent}%`;
    _percentAnimation();
  };

  return {
    set: function() {
      // _percentAnimationTest();
      for (let i = 0; i < imagesTotalCount; i++) {
        let imageClone = document.createElement("img");
        imageClone.onload = _imageLoaded;
        imageClone.onerror = _imageLoaded;
        imageClone.src = images[i].src;
      }
    },

    load: function() {
      setTimeout(function() {
        preloader.classList.toggle(`${options.preloader}_loaded`);
      }, 500);
    }
  };
})({
  preloader: "preloader",
  percentBlock: "preloader__percent"
});
