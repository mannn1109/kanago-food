// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#hmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#hmenu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
