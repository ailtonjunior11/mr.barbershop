const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");
const listItemsMobile = document.querySelector(".list-items-mobile");
const main = document.querySelector("main");

iconOpen.addEventListener("click", () => {
  listItemsMobile.classList.add("active");
  iconOpen.style.display = "none";
  iconClose.style.display = "block";
});

iconClose.addEventListener("click", () => {
  listItemsMobile.classList.remove("active");
  iconClose.style.display = "none";
  iconOpen.style.display = "block";
});

listItemsMobile.addEventListener("click", () => {
  listItemsMobile.classList.remove("active");
  iconClose.style.display = "none";
  iconOpen.style.display = "block";
});

main.addEventListener("click", () => {
  listItemsMobile.classList.remove("active");
  iconClose.style.display = "none";
  iconOpen.style.display = "block";
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.classList.toggle("scrolled", window.scrollY > 25);
});
