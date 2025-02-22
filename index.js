document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger img");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("slide");
  });
});
