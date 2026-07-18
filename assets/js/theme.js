(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    if (root.dataset.theme) return root.dataset.theme;
    return systemDark.matches ? "dark" : "light";
  }

  function updateLabel() {
    if (!toggle) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " mode");
    toggle.setAttribute("title", "Switch to " + next + " mode");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("sovichea-theme", next);
      updateLabel();
    });
  }

  systemDark.addEventListener("change", updateLabel);
  updateLabel();
}());
