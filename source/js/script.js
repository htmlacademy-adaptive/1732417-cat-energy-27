const navMain = document.querySelector(".main-header__wrapper");
const navToggle = document.querySelector(".main-header__toggle");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-header--closed")) {
  navMain.classList.remove("main-header--closed");
  navMain.classList.add("main-header--opened");
  }
else {
  navMain.classList.add("main-header--closed");
  navMain.classList.remove("main-header--opened");
  }
});
