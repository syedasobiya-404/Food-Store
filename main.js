const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-96");
  } else {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-96");
  }
});
