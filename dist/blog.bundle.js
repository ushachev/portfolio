webpackJsonp([3],{0:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar menuOverlay = exports.menuOverlay = function (options) {\n  var button = document.querySelector("." + options.button),\n      menu = document.querySelector("." + options.menu),\n      menuItems = menu.querySelectorAll("." + options.menuItem);\n\n  var counter = 0;\n\n  var _menuAnimation = function _menuAnimation() {\n    menuItems[counter].classList.toggle(options.menuItem + "_overlay");\n    counter++;\n    if (counter < menuItems.length) {\n      setTimeout(_menuAnimation, 100);\n    } else {\n      counter = 0;\n    }\n  };\n\n  var _toggleOverlay = function _toggleOverlay() {\n    button.classList.toggle("is-active");\n    menu.classList.toggle(options.menu + "_overlay");\n    document.querySelector("body").classList.toggle("scroll-off");\n    setTimeout(_menuAnimation, 600);\n  };\n\n  var addListeners = function addListeners() {\n    button.addEventListener("click", _toggleOverlay);\n    menu.addEventListener("click", function (e) {\n      if (e.target.className === options.menuLink) {\n        _toggleOverlay();\n      }\n    });\n  };\n\n  return {\n    init: addListeners\n  };\n}({\n  button: "hamburger",\n  menu: "header__nav",\n  menuItem: "header__nav-item",\n  menuLink: "header__nav-link"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LW92ZXJsYXkuanM/YzRiNyJdLCJuYW1lcyI6WyJtZW51T3ZlcmxheSIsIm9wdGlvbnMiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwibWVudUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnVJdGVtIiwiY291bnRlciIsIl9tZW51QW5pbWF0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIl90b2dnbGVPdmVybGF5IiwiYWRkTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJtZW51TGluayIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsb0NBQWUsVUFBU0MsT0FBVCxFQUFrQjtBQUMxQyxNQUFNQyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLE1BQU1ILFFBQVFDLE1BQXJDLENBQWY7QUFBQSxNQUNFRyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE1BQU1ILFFBQVFJLElBQXJDLENBRFQ7QUFBQSxNQUVFQyxZQUFZRCxLQUFLRSxnQkFBTCxDQUFzQixNQUFNTixRQUFRTyxRQUFwQyxDQUZkOztBQUlBLE1BQUlDLFVBQVUsQ0FBZDs7QUFFQSxNQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVc7QUFDOUJKLGNBQVVHLE9BQVYsRUFBbUJFLFNBQW5CLENBQTZCQyxNQUE3QixDQUFvQ1gsUUFBUU8sUUFBUixHQUFtQixVQUF2RDtBQUNBQztBQUNBLFFBQUlBLFVBQVVILFVBQVVPLE1BQXhCLEVBQWdDO0FBQzlCQyxpQkFBV0osY0FBWCxFQUEyQixHQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMRCxnQkFBVSxDQUFWO0FBQ0Q7QUFDRixHQVJEOztBQVVBLE1BQUlNLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBVztBQUM5QmIsV0FBT1MsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsV0FBeEI7QUFDQVAsU0FBS00sU0FBTCxDQUFlQyxNQUFmLENBQXNCWCxRQUFRSSxJQUFSLEdBQWUsVUFBckM7QUFDQUYsYUFBU0MsYUFBVCxDQUF1QixNQUF2QixFQUErQk8sU0FBL0IsQ0FBeUNDLE1BQXpDLENBQWdELFlBQWhEO0FBQ0FFLGVBQVdKLGNBQVgsRUFBMkIsR0FBM0I7QUFDRCxHQUxEOztBQU9BLE1BQUlNLGVBQWUsU0FBZkEsWUFBZSxHQUFXO0FBQzVCZCxXQUFPZSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0YsY0FBakM7QUFDQVYsU0FBS1ksZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pDLFVBQUlBLEVBQUVDLE1BQUYsQ0FBU0MsU0FBVCxLQUF1Qm5CLFFBQVFvQixRQUFuQyxFQUE2QztBQUMzQ047QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQVBEOztBQVNBLFNBQU87QUFDTE8sVUFBTU47QUFERCxHQUFQO0FBR0QsQ0FwQ3dCLENBb0N0QjtBQUNEZCxVQUFRLFdBRFA7QUFFREcsUUFBTSxhQUZMO0FBR0RHLFlBQVUsa0JBSFQ7QUFJRGEsWUFBVTtBQUpULENBcENzQixDQUFsQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBtZW51T3ZlcmxheSA9IChmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9wdGlvbnMuYnV0dG9uKSxcclxuICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgb3B0aW9ucy5tZW51KSxcclxuICAgIG1lbnVJdGVtcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIG9wdGlvbnMubWVudUl0ZW0pO1xyXG5cclxuICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gIGxldCBfbWVudUFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbWVudUl0ZW1zW2NvdW50ZXJdLmNsYXNzTGlzdC50b2dnbGUob3B0aW9ucy5tZW51SXRlbSArIFwiX292ZXJsYXlcIik7XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICBpZiAoY291bnRlciA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgc2V0VGltZW91dChfbWVudUFuaW1hdGlvbiwgMTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBfdG9nZ2xlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUob3B0aW9ucy5tZW51ICsgXCJfb3ZlcmxheVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzY3JvbGwtb2ZmXCIpO1xyXG4gICAgc2V0VGltZW91dChfbWVudUFuaW1hdGlvbiwgNjAwKTtcclxuICB9O1xyXG5cclxuICBsZXQgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF90b2dnbGVPdmVybGF5KTtcclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gb3B0aW9ucy5tZW51TGluaykge1xyXG4gICAgICAgIF90b2dnbGVPdmVybGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBhZGRMaXN0ZW5lcnNcclxuICB9O1xyXG59KSh7XHJcbiAgYnV0dG9uOiBcImhhbWJ1cmdlclwiLFxyXG4gIG1lbnU6IFwiaGVhZGVyX19uYXZcIixcclxuICBtZW51SXRlbTogXCJoZWFkZXJfX25hdi1pdGVtXCIsXHJcbiAgbWVudUxpbms6IFwiaGVhZGVyX19uYXYtbGlua1wiXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LW92ZXJsYXkuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},1:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar paralaxScroll = exports.paralaxScroll = function (options) {\n  var bg = document.querySelector(options.bg),\n      bgText = document.querySelector(options.bgText),\n      author = document.querySelector(options.author);\n\n  var _scroll = function _scroll(block, windowScroll, strafeAmount) {\n    var strafe = windowScroll / -strafeAmount + "%";\n\n    block.style.transform = "translate3d(0, " + strafe + ", 0)";\n  };\n\n  return {\n    init: function init(wScroll) {\n      _scroll(bg, wScroll, 35);\n      _scroll(bgText, wScroll, 25);\n      _scroll(author, wScroll, 15);\n    }\n  };\n}({\n  bg: ".start",\n  bgText: ".start__info",\n  author: ".author"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGF4LXNjcm9sbC5qcz80OGEwIl0sIm5hbWVzIjpbInBhcmFsYXhTY3JvbGwiLCJvcHRpb25zIiwiYmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiZ1RleHQiLCJhdXRob3IiLCJfc2Nyb2xsIiwiYmxvY2siLCJ3aW5kb3dTY3JvbGwiLCJzdHJhZmVBbW91bnQiLCJzdHJhZmUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLHdDQUFpQixVQUFTQyxPQUFULEVBQWtCO0FBQzVDLE1BQUlDLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUJILFFBQVFDLEVBQS9CLENBQVQ7QUFBQSxNQUNFRyxTQUFTRixTQUFTQyxhQUFULENBQXVCSCxRQUFRSSxNQUEvQixDQURYO0FBQUEsTUFFRUMsU0FBU0gsU0FBU0MsYUFBVCxDQUF1QkgsUUFBUUssTUFBL0IsQ0FGWDs7QUFJQSxNQUFJQyxVQUFVLFNBQVZBLE9BQVUsQ0FBU0MsS0FBVCxFQUFnQkMsWUFBaEIsRUFBOEJDLFlBQTlCLEVBQTRDO0FBQ3hELFFBQUlDLFNBQVNGLGVBQWUsQ0FBQ0MsWUFBaEIsR0FBK0IsR0FBNUM7O0FBRUFGLFVBQU1JLEtBQU4sQ0FBWUMsU0FBWix1QkFBMENGLE1BQTFDO0FBQ0QsR0FKRDs7QUFNQSxTQUFPO0FBQ0xHLFVBQU0sY0FBU0MsT0FBVCxFQUFrQjtBQUN0QlIsY0FBUUwsRUFBUixFQUFZYSxPQUFaLEVBQXFCLEVBQXJCO0FBQ0FSLGNBQVFGLE1BQVIsRUFBZ0JVLE9BQWhCLEVBQXlCLEVBQXpCO0FBQ0FSLGNBQVFELE1BQVIsRUFBZ0JTLE9BQWhCLEVBQXlCLEVBQXpCO0FBQ0Q7QUFMSSxHQUFQO0FBT0QsQ0FsQjBCLENBa0J4QjtBQUNEYixNQUFJLFFBREg7QUFFREcsVUFBUSxjQUZQO0FBR0RDLFVBQVE7QUFIUCxDQWxCd0IsQ0FBcEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgcGFyYWxheFNjcm9sbCA9IChmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgbGV0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJnKSxcclxuICAgIGJnVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5iZ1RleHQpLFxyXG4gICAgYXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmF1dGhvcik7XHJcblxyXG4gIGxldCBfc2Nyb2xsID0gZnVuY3Rpb24oYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbiAgICBsZXQgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArIFwiJVwiO1xyXG5cclxuICAgIGJsb2NrLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke3N0cmFmZX0sIDApYDtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24od1Njcm9sbCkge1xyXG4gICAgICBfc2Nyb2xsKGJnLCB3U2Nyb2xsLCAzNSk7XHJcbiAgICAgIF9zY3JvbGwoYmdUZXh0LCB3U2Nyb2xsLCAyNSk7XHJcbiAgICAgIF9zY3JvbGwoYXV0aG9yLCB3U2Nyb2xsLCAxNSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSkoe1xyXG4gIGJnOiBcIi5zdGFydFwiLFxyXG4gIGJnVGV4dDogXCIuc3RhcnRfX2luZm9cIixcclxuICBhdXRob3I6IFwiLmF1dGhvclwiXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGF4LXNjcm9sbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n')},15:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _menuOverlay = __webpack_require__(0);\n\nvar _paralaxScroll = __webpack_require__(1);\n\n_menuOverlay.menuOverlay.init();\n\nwindow.onscroll = function () {\n  _paralaxScroll.paralaxScroll.init(window.pageYOffset);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz9kODVhIl0sIm5hbWVzIjpbIm1lbnVPdmVybGF5IiwiaW5pdCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwicGFyYWxheFNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBQSx5QkFBWUMsSUFBWjs7QUFFQUMsT0FBT0MsUUFBUCxHQUFrQixZQUFXO0FBQzNCQywrQkFBY0gsSUFBZCxDQUFtQkMsT0FBT0csV0FBMUI7QUFDRCxDQUZEIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVudU92ZXJsYXkgfSBmcm9tIFwiLi9tb2R1bGVzL21lbnUtb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBwYXJhbGF4U2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9wYXJhbGF4LXNjcm9sbFwiO1xyXG5cclxubWVudU92ZXJsYXkuaW5pdCgpO1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgcGFyYWxheFNjcm9sbC5pbml0KHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9ibG9nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n")}},[15]);