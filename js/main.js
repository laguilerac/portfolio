let myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    myNav.classList.add("b-white");
  } else {
    myNav.classList.remove("b-white");
  }
};