export let postMenuScroll = function(options) {
  const postListMargin = 55;
  let postMenu = document.querySelector(options.postMenu),
    postList = document.querySelector(options.postList),
    menuBtn = document.querySelector(options.menuBtn),
    blogItems = postList.querySelectorAll(options.postTitle),
    menuItems = document.querySelectorAll(`.${options.menuItem}`),
    isActive,
    isOpened = false;

  let addListeners = function() {
    menuBtn.addEventListener("click", function() {
      if (isOpened) {
        postMenu.style.right = "99%";
        isOpened = false;
      } else {
        let menuWidth = parseInt(getComputedStyle(postMenu).width);
        postMenu.style.right = `${window.innerWidth - menuWidth}px`;
        isOpened = true;
      }
    });
    menuItems.forEach(function(menuItem, i) {
      menuItem.addEventListener("click", function(e) {
        if (e.target.className === "post-menu__link") {
          e.preventDefault();
          let postPosTop = blogItems[i].getBoundingClientRect().top,
            scrollAmount = Math.floor(postPosTop - postListMargin);
          // window.scrollBy(0, scrollAmount);
          window.scrollBy({ top: scrollAmount, left: 0, behavior: "smooth" });
        }
      });
    });
  };

  return {
    set: function() {
      isActive = false;
      addListeners();
    },

    hide: function() {
      if (window.innerWidth <= 768 || window.innerHeight <= 480) {
        postMenu.style.right = "99%";
      }
    },

    init: function(wScroll) {
      let postListRect = postList.getBoundingClientRect(),
        postListHeight = postListRect.bottom - postListRect.top,
        postListBottom = postListHeight + postListMargin,
        postListTop = window.innerHeight;

      if (window.innerWidth <= 768 || window.innerHeight <= 480) {
        if (!isActive && wScroll >= window.innerHeight) {
          postMenu.style.right = "99%";
          isActive = true;
        }
        if (wScroll < postListTop) {
          postMenu.style.position = "absolute";
          // postMenu.style.top = `${postListMargin}px`;
          postMenu.style.top = "0";
        }
        if (wScroll >= postListTop && wScroll < postListBottom) {
          postMenu.style.position = "fixed";
          postMenu.style.top = "0";
          postMenu.style.bottom = "auto";
        }
        if (wScroll >= postListBottom) {
          postMenu.style.position = "absolute";
          postMenu.style.top = "auto";
          postMenu.style.bottom = "0";
        }
      } else {
        postMenu.style.position = "sticky";
        postMenu.style.top = `${postListMargin}px`;
        postMenu.style.bottom = "auto";
      }
    },

    indicate: function(wScroll) {
      blogItems.forEach(function(post, i) {
        let postPosTop = post.getBoundingClientRect().top,
          postPosTrigger = window.innerHeight / 2;
        if (postPosTop <= postPosTrigger && postPosTop >= postListMargin) {
          menuItems.forEach(function(menuItem, j) {
            if (j == i) {
              menuItem.classList.add(`${options.menuItem}_active`);
            } else {
              menuItem.classList.remove(`${options.menuItem}_active`);
            }
          });
        }
      });
    }
  };
};
