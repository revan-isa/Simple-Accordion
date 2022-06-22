let btns = document.querySelectorAll(".header");
let contents = document.querySelectorAll(".content");
let icons = document.querySelectorAll(".fa-solid");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    contents[i].classList.toggle("active");
    icons[i].classList.toggle("icon-active");
  });
}
