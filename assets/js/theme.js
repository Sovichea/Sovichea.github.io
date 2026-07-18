(function () {
  var root = document.documentElement;
  var toggles = document.querySelectorAll(".theme-toggle");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    if (root.dataset.theme) return root.dataset.theme;
    return systemDark.matches ? "dark" : "light";
  }

  function updateLabels() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].setAttribute("aria-label", "Switch to " + next + " mode");
      toggles[i].setAttribute("title", "Switch to " + next + " mode");
    }
  }

  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("sovichea-theme", next);
      updateLabels();
    });
  }

  systemDark.addEventListener("change", updateLabels);
  updateLabels();
}());
