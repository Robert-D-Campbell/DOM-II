// Your code goes here

//nav logo chase (mouseover, mouseout)(2)
let navLogo = document.querySelector(".logo-heading");
navLogo.addEventListener("mouseover", e => {
  navLogo.style.transform = "translateX(-120%)";
  navLogo.style.transition = "1s";
});
navLogo.addEventListener("mouseout", e => {
  navLogo.style.transform = "translateX(575%)";
  navLogo.style.transition = "1s";
});
//!nav logo chase (mouseover, mouseout)
//Nav Links/Header (click)(3)
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", e => {
    el.style.color = "blue";
    e.stopPropagation();
    e.preventDefault();
  });
});
let navContainer = document.querySelector(".nav-container");

navContainer.addEventListener("click", e => {
  navContainer.style.backgroundColor = "darkgreen";
});
//!Nav Links/Header (click)
//Footer (click, dblclick)(4)
let footer = document.querySelector("footer");
footer.addEventListener("click", () => {
  footer.style.opacity = "0.0";
});
footer.addEventListener("dblclick", () => {
  footer.style.opacity = "1.0";
});
//!Footer (click, dblclick)
//Banner (click)
let bannerImg = document.querySelector(".bannerImg");
bannerImg.addEventListener("dblclick", e => {
  bannerImg.src = "../img/toy-bus.jpeg";
});
//!Banner (click)

// image (mouseenter, mouseleave)(6)
let imageResize = document.querySelector(".img-content");
imageResize.addEventListener("mouseenter", () => {
  imageResize.style.transform = "scale(1.2)";
  imageResize.style.transition = " all 0.3s";
});
imageResize.addEventListener("mouseleave", () => {
  imageResize.style.transform = "scale(1.0)";
  imageResize.style.transition = " all 0.3s";
});
//! image (mouseenter, mouseleave)
// container flip colors (wheel)
let container = document.querySelector(".home");
window.addEventListener("wheel", () => {
  container.style.backgroundColor = "black";
  container.style.color = "grey";
  container.style.transition = "2s";
});
//! container flip colors (wheel)(7)
// change picture (mousedown, mouseup)(9)
let bottomBanner = document.querySelector(".bottomBanner");
bottomBanner.addEventListener("mousedown", e => {
  bottomBanner.src = "../img/boat.jpeg";
});
bottomBanner.addEventListener("mouseup", e => {
  bottomBanner.src = "../img/destination.jpg";
});
//! change picture (mousedown, mouseup)
// alert (load)(10)
window.addEventListener("load", () => {
  alert("Welcome!");
});
//! alert (load)(10)
