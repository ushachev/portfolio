export let flip = (function(options) {
  let buttonAuth = document.querySelector(options.buttonAuth),
    buttonIndex = document.querySelector(options.buttonIndex),
    flipBlock = document.querySelector(options.flipBlock);

  let _toggleFlip = function() {
    buttonAuth.classList.toggle("auth-btn_clicked");
    flipBlock.classList.toggle("flip-wrapper_flipped");
  };

  let addListeners = function() {
    buttonAuth.addEventListener("click", _toggleFlip);
    buttonIndex.addEventListener("click", _toggleFlip);
  };

  return {
    init: addListeners
  };
})({
  buttonAuth: ".auth-btn",
  buttonIndex: "#index-btn",
  flipBlock: ".flip-wrapper"
});
