webpackJsonp([3],{0:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar menuOverlay = exports.menuOverlay = function (options) {\n  var button = document.querySelector("." + options.button),\n      menu = document.querySelector("." + options.menu),\n      menuItems = menu.querySelectorAll("." + options.menuItem);\n\n  var counter = 0;\n\n  var _menuAnimation = function _menuAnimation() {\n    menuItems[counter].classList.toggle(options.menuItem + "_overlay");\n    counter++;\n    if (counter < menuItems.length) {\n      setTimeout(_menuAnimation, 100);\n    } else {\n      counter = 0;\n    }\n  };\n\n  var _toggleOverlay = function _toggleOverlay() {\n    button.classList.toggle("is-active");\n    menu.classList.toggle(options.menu + "_overlay");\n    document.querySelector("body").classList.toggle("scroll-off");\n    setTimeout(_menuAnimation, 600);\n  };\n\n  var addListeners = function addListeners() {\n    button.addEventListener("click", _toggleOverlay);\n    menu.addEventListener("click", function (e) {\n      if (e.target.className === options.menuLink) {\n        _toggleOverlay();\n      }\n    });\n  };\n\n  return {\n    init: addListeners\n  };\n}({\n  button: "hamburger",\n  menu: "header__nav",\n  menuItem: "header__nav-item",\n  menuLink: "header__nav-link"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LW92ZXJsYXkuanM/YzRiNyJdLCJuYW1lcyI6WyJtZW51T3ZlcmxheSIsIm9wdGlvbnMiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwibWVudUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnVJdGVtIiwiY291bnRlciIsIl9tZW51QW5pbWF0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIl90b2dnbGVPdmVybGF5IiwiYWRkTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJtZW51TGluayIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsb0NBQWUsVUFBU0MsT0FBVCxFQUFrQjtBQUMxQyxNQUFNQyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLE1BQU1ILFFBQVFDLE1BQXJDLENBQWY7QUFBQSxNQUNFRyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE1BQU1ILFFBQVFJLElBQXJDLENBRFQ7QUFBQSxNQUVFQyxZQUFZRCxLQUFLRSxnQkFBTCxDQUFzQixNQUFNTixRQUFRTyxRQUFwQyxDQUZkOztBQUlBLE1BQUlDLFVBQVUsQ0FBZDs7QUFFQSxNQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVc7QUFDOUJKLGNBQVVHLE9BQVYsRUFBbUJFLFNBQW5CLENBQTZCQyxNQUE3QixDQUFvQ1gsUUFBUU8sUUFBUixHQUFtQixVQUF2RDtBQUNBQztBQUNBLFFBQUlBLFVBQVVILFVBQVVPLE1BQXhCLEVBQWdDO0FBQzlCQyxpQkFBV0osY0FBWCxFQUEyQixHQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMRCxnQkFBVSxDQUFWO0FBQ0Q7QUFDRixHQVJEOztBQVVBLE1BQUlNLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBVztBQUM5QmIsV0FBT1MsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsV0FBeEI7QUFDQVAsU0FBS00sU0FBTCxDQUFlQyxNQUFmLENBQXNCWCxRQUFRSSxJQUFSLEdBQWUsVUFBckM7QUFDQUYsYUFBU0MsYUFBVCxDQUF1QixNQUF2QixFQUErQk8sU0FBL0IsQ0FBeUNDLE1BQXpDLENBQWdELFlBQWhEO0FBQ0FFLGVBQVdKLGNBQVgsRUFBMkIsR0FBM0I7QUFDRCxHQUxEOztBQU9BLE1BQUlNLGVBQWUsU0FBZkEsWUFBZSxHQUFXO0FBQzVCZCxXQUFPZSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0YsY0FBakM7QUFDQVYsU0FBS1ksZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pDLFVBQUlBLEVBQUVDLE1BQUYsQ0FBU0MsU0FBVCxLQUF1Qm5CLFFBQVFvQixRQUFuQyxFQUE2QztBQUMzQ047QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQVBEOztBQVNBLFNBQU87QUFDTE8sVUFBTU47QUFERCxHQUFQO0FBR0QsQ0FwQ3dCLENBb0N0QjtBQUNEZCxVQUFRLFdBRFA7QUFFREcsUUFBTSxhQUZMO0FBR0RHLFlBQVUsa0JBSFQ7QUFJRGEsWUFBVTtBQUpULENBcENzQixDQUFsQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBtZW51T3ZlcmxheSA9IChmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9wdGlvbnMuYnV0dG9uKSxcclxuICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgb3B0aW9ucy5tZW51KSxcclxuICAgIG1lbnVJdGVtcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIG9wdGlvbnMubWVudUl0ZW0pO1xyXG5cclxuICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gIGxldCBfbWVudUFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbWVudUl0ZW1zW2NvdW50ZXJdLmNsYXNzTGlzdC50b2dnbGUob3B0aW9ucy5tZW51SXRlbSArIFwiX292ZXJsYXlcIik7XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICBpZiAoY291bnRlciA8IG1lbnVJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgc2V0VGltZW91dChfbWVudUFuaW1hdGlvbiwgMTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBfdG9nZ2xlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUob3B0aW9ucy5tZW51ICsgXCJfb3ZlcmxheVwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzY3JvbGwtb2ZmXCIpO1xyXG4gICAgc2V0VGltZW91dChfbWVudUFuaW1hdGlvbiwgNjAwKTtcclxuICB9O1xyXG5cclxuICBsZXQgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF90b2dnbGVPdmVybGF5KTtcclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gb3B0aW9ucy5tZW51TGluaykge1xyXG4gICAgICAgIF90b2dnbGVPdmVybGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBhZGRMaXN0ZW5lcnNcclxuICB9O1xyXG59KSh7XHJcbiAgYnV0dG9uOiBcImhhbWJ1cmdlclwiLFxyXG4gIG1lbnU6IFwiaGVhZGVyX19uYXZcIixcclxuICBtZW51SXRlbTogXCJoZWFkZXJfX25hdi1pdGVtXCIsXHJcbiAgbWVudUxpbms6IFwiaGVhZGVyX19uYXYtbGlua1wiXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LW92ZXJsYXkuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},15:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _menuOverlay = __webpack_require__(0);\n\nvar _paralaxScrollBlog = __webpack_require__(16);\n\n_menuOverlay.menuOverlay.init();\n\nwindow.onscroll = function () {\n  _paralaxScrollBlog.paralaxScroll.init(window.pageYOffset);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz9kODVhIl0sIm5hbWVzIjpbIm1lbnVPdmVybGF5IiwiaW5pdCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwicGFyYWxheFNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBQSx5QkFBWUMsSUFBWjs7QUFFQUMsT0FBT0MsUUFBUCxHQUFrQixZQUFXO0FBQzNCQyxtQ0FBY0gsSUFBZCxDQUFtQkMsT0FBT0csV0FBMUI7QUFDRCxDQUZEIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVudU92ZXJsYXkgfSBmcm9tIFwiLi9tb2R1bGVzL21lbnUtb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBwYXJhbGF4U2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9wYXJhbGF4LXNjcm9sbC1ibG9nXCI7XHJcblxyXG5tZW51T3ZlcmxheS5pbml0KCk7XHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICBwYXJhbGF4U2Nyb2xsLmluaXQod2luZG93LnBhZ2VZT2Zmc2V0KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n")},16:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar paralaxScroll = exports.paralaxScroll = function (options) {\n  var bg = document.querySelector(options.bg),\n      bgText = document.querySelector(options.bgText);\n\n  var _scroll = function _scroll(block, windowScroll, strafeAmount) {\n    var strafe = windowScroll / -strafeAmount + "%";\n\n    block.style.webkitTransform = "translate3d(0, " + strafe + ", 0)";\n    block.style.transform = "translate3d(0, " + strafe + ", 0)";\n  };\n\n  return {\n    init: function init(wScroll) {\n      _scroll(bg, wScroll, 35);\n      _scroll(bgText, wScroll, 25);\n    }\n  };\n}({\n  bg: ".start__bg",\n  bgText: ".start__info"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGF4LXNjcm9sbC1ibG9nLmpzP2U5ODUiXSwibmFtZXMiOlsicGFyYWxheFNjcm9sbCIsIm9wdGlvbnMiLCJiZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJnVGV4dCIsIl9zY3JvbGwiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInN0eWxlIiwid2Via2l0VHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiaW5pdCIsIndTY3JvbGwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsd0NBQWlCLFVBQVNDLE9BQVQsRUFBa0I7QUFDNUMsTUFBSUMsS0FBS0MsU0FBU0MsYUFBVCxDQUF1QkgsUUFBUUMsRUFBL0IsQ0FBVDtBQUFBLE1BQ0VHLFNBQVNGLFNBQVNDLGFBQVQsQ0FBdUJILFFBQVFJLE1BQS9CLENBRFg7O0FBR0EsTUFBSUMsVUFBVSxTQUFWQSxPQUFVLENBQVNDLEtBQVQsRUFBZ0JDLFlBQWhCLEVBQThCQyxZQUE5QixFQUE0QztBQUN4RCxRQUFJQyxTQUFTRixlQUFlLENBQUNDLFlBQWhCLEdBQStCLEdBQTVDOztBQUVBRixVQUFNSSxLQUFOLENBQVlDLGVBQVosdUJBQWdERixNQUFoRDtBQUNBSCxVQUFNSSxLQUFOLENBQVlFLFNBQVosdUJBQTBDSCxNQUExQztBQUNELEdBTEQ7O0FBT0EsU0FBTztBQUNMSSxVQUFNLGNBQVNDLE9BQVQsRUFBa0I7QUFDdEJULGNBQVFKLEVBQVIsRUFBWWEsT0FBWixFQUFxQixFQUFyQjtBQUNBVCxjQUFRRCxNQUFSLEVBQWdCVSxPQUFoQixFQUF5QixFQUF6QjtBQUNEO0FBSkksR0FBUDtBQU1ELENBakIwQixDQWlCeEI7QUFDRGIsTUFBSSxZQURIO0FBRURHLFVBQVE7QUFGUCxDQWpCd0IsQ0FBcEIiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IHBhcmFsYXhTY3JvbGwgPSAoZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIGxldCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5iZyksXHJcbiAgICBiZ1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYmdUZXh0KTtcclxuXHJcbiAgbGV0IF9zY3JvbGwgPSBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcclxuICAgIGxldCBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgXCIlXCI7XHJcblxyXG4gICAgYmxvY2suc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7c3RyYWZlfSwgMClgO1xyXG4gICAgYmxvY2suc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7c3RyYWZlfSwgMClgO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBmdW5jdGlvbih3U2Nyb2xsKSB7XHJcbiAgICAgIF9zY3JvbGwoYmcsIHdTY3JvbGwsIDM1KTtcclxuICAgICAgX3Njcm9sbChiZ1RleHQsIHdTY3JvbGwsIDI1KTtcclxuICAgIH1cclxuICB9O1xyXG59KSh7XHJcbiAgYmc6IFwiLnN0YXJ0X19iZ1wiLFxyXG4gIGJnVGV4dDogXCIuc3RhcnRfX2luZm9cIlxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcGFyYWxheC1zY3JvbGwtYmxvZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n')}},[15]);