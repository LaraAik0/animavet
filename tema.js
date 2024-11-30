let theme = localStorage.getItem("theme");

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

function alternarTema() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
}

function toggleMenu() {
  let navbar = document.getElementById("navbar");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}

function main() {
  let body = document.querySelector("body");
  if (
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    localStorage.getItem("theme") === "dark"
  ) {
    body.classList.add("dark");
  } else if (
    window.matchMedia("(prefers-color-scheme: light)").matches &&
    localStorage.getItem("theme") === "light"
  ) {
    body.classList.add("light");
  } else {
    body.classList.add("light");
  }
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
}
main();
