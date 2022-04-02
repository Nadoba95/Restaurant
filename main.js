"use strict";

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".nav-menu");
const btnMenu = document.querySelector(".menu-bars");

const block = document.createElement("div");
header.insertAdjacentElement("afterbegin", block);

window.addEventListener("scroll", () => {
  const headerHeight = header.scrollHeight;
  const navHeight = nav.scrollHeight;
  block.style.height = `${navHeight}px`;

  if (window.scrollY > headerHeight) {
    nav.classList.add("sticky");
    block.style.display = "block";

    if (window.innerWidth <= 768) {
      navMenu.style.top = "60px";
      navMenu.style.backgroundColor = "rgba(0,0,0,0.2)";
    } else {
      navMenu.style.backgroundColor = "transparent";
    }
  } else {
    nav.classList.remove("sticky");
    block.style.display = "none";

    if (window.innerWidth <= 768) {
      navMenu.style.top = "80px";
      navMenu.style.backgroundColor = "transparent";
    }
  }
});

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
