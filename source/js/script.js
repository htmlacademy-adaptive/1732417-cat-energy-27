const navMain = document.querySelector(".main-header__wrapper");
const navToggle = document.querySelector(".main-header__toggle");

function headerClose () {
  navMain.classList.add("main-header-closed");
}

headerClose();

function toggleClose () {
  navToggle.classList.remove("main-header__toggle-close");
}

toggleClose();

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-header-closed")) {
  navMain.classList.remove("main-header-closed");
  navMain.classList.add("main-header-opened");
  }
else {
  headerClose();
  navMain.classList.remove("main-header-opened");
    }
});

const slider = document.querySelector(".slider");
const curtain = slider.querySelector(".slider__curtain");
let sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

function handleGrabCurtain (event) {
	curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"));
  clientX = event.clientX;
	window.addEventListener("pointermove", handleMoveCurtain);
}

function handleMoveCurtain (event) {
	let deltaX = event.clientX - clientX;
	let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
	let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
	slider.style.setProperty("--curtain-place", `${curtainPlace}`);
}

function handleReleaseCurtaine (event) {
	window.removeEventListener("pointermove", handleMoveCurtain);
}

window.addEventListener("pointerup", handleReleaseCurtaine);

curtain.addEventListener("pointerdown", handleGrabCurtain);
