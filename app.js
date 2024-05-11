/* Created by Tivotal */

let nav = document.querySelector(".nav");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
