(function () {
  "use strict";

  var STORAGE_KEY = "shawon-theme";
  var savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {}

  document.documentElement.dataset.theme =
    savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
})();
