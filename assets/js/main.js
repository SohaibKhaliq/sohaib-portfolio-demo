// Rotating role word in the hero (Isak-style animated text, plain JS).
(function () {
  var words = ["Full-Stack Developer", "Laravel Developer", "Flutter Developer", "Software Engineer"];
  var el = document.getElementById("rot");
  if (!el) return;
  var i = 0;
  setInterval(function () {
    i = (i + 1) % words.length;
    el.style.opacity = 0;
    setTimeout(function () { el.textContent = words[i]; el.style.opacity = 1; }, 220);
  }, 2600);
  el.style.transition = "opacity .22s ease";
})();
