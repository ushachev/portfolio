webpackJsonp([2],{4:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _flip = __webpack_require__(5);\n\n_flip.flip.init();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz84MWYyIl0sIm5hbWVzIjpbImZsaXAiLCJpbml0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBQSxXQUFLQyxJQUFMIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmbGlwIH0gZnJvbSBcIi4vbW9kdWxlcy9mbGlwXCI7XHJcblxyXG5mbGlwLmluaXQoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n")},5:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar flip = exports.flip = function (options) {\n  var buttonAuth = document.querySelector(options.buttonAuth),\n      buttonIndex = document.querySelector(options.buttonIndex),\n      flipBlock = document.querySelector(options.flipBlock);\n\n  var _toggleFlip = function _toggleFlip() {\n    buttonAuth.classList.toggle("auth-btn_clicked");\n    flipBlock.classList.toggle("flip-wrapper_flipped");\n  };\n\n  var addListeners = function addListeners() {\n    buttonAuth.addEventListener("click", _toggleFlip);\n    buttonIndex.addEventListener("click", _toggleFlip);\n  };\n\n  return {\n    init: addListeners\n  };\n}({\n  buttonAuth: ".auth-btn",\n  buttonIndex: "#index-btn",\n  flipBlock: ".flip-wrapper"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzRhN2UiXSwibmFtZXMiOlsiZmxpcCIsIm9wdGlvbnMiLCJidXR0b25BdXRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uSW5kZXgiLCJmbGlwQmxvY2siLCJfdG9nZ2xlRmxpcCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLHNCQUFRLFVBQVNDLE9BQVQsRUFBa0I7QUFDbkMsTUFBSUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QkgsUUFBUUMsVUFBL0IsQ0FBakI7QUFBQSxNQUNFRyxjQUFjRixTQUFTQyxhQUFULENBQXVCSCxRQUFRSSxXQUEvQixDQURoQjtBQUFBLE1BRUVDLFlBQVlILFNBQVNDLGFBQVQsQ0FBdUJILFFBQVFLLFNBQS9CLENBRmQ7O0FBSUEsTUFBSUMsY0FBYyxTQUFkQSxXQUFjLEdBQVc7QUFDM0JMLGVBQVdNLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLGtCQUE1QjtBQUNBSCxjQUFVRSxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixzQkFBM0I7QUFDRCxHQUhEOztBQUtBLE1BQUlDLGVBQWUsU0FBZkEsWUFBZSxHQUFXO0FBQzVCUixlQUFXUyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ0osV0FBckM7QUFDQUYsZ0JBQVlNLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDSixXQUF0QztBQUNELEdBSEQ7O0FBS0EsU0FBTztBQUNMSyxVQUFNRjtBQURELEdBQVA7QUFHRCxDQWxCaUIsQ0FrQmY7QUFDRFIsY0FBWSxXQURYO0FBRURHLGVBQWEsWUFGWjtBQUdEQyxhQUFXO0FBSFYsQ0FsQmUsQ0FBWCIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBmbGlwID0gKGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICBsZXQgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5idXR0b25BdXRoKSxcclxuICAgIGJ1dHRvbkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJ1dHRvbkluZGV4KSxcclxuICAgIGZsaXBCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5mbGlwQmxvY2spO1xyXG5cclxuICBsZXQgX3RvZ2dsZUZsaXAgPSBmdW5jdGlvbigpIHtcclxuICAgIGJ1dHRvbkF1dGguY2xhc3NMaXN0LnRvZ2dsZShcImF1dGgtYnRuX2NsaWNrZWRcIik7XHJcbiAgICBmbGlwQmxvY2suY2xhc3NMaXN0LnRvZ2dsZShcImZsaXAtd3JhcHBlcl9mbGlwcGVkXCIpO1xyXG4gIH07XHJcblxyXG4gIGxldCBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF90b2dnbGVGbGlwKTtcclxuICAgIGJ1dHRvbkluZGV4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfdG9nZ2xlRmxpcCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGFkZExpc3RlbmVyc1xyXG4gIH07XHJcbn0pKHtcclxuICBidXR0b25BdXRoOiBcIi5hdXRoLWJ0blwiLFxyXG4gIGJ1dHRvbkluZGV4OiBcIiNpbmRleC1idG5cIixcclxuICBmbGlwQmxvY2s6IFwiLmZsaXAtd3JhcHBlclwiXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n')}},[4]);