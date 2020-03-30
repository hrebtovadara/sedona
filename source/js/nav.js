
var navMain = document.querySelector(".header");
var navToggle = document.querySelector(".header__toggle");
var buttonClose = document.querySelector(".main-nav__close");

navMain.classList.remove("header--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header--closed")) {
    navMain.classList.remove("header--closed");
    navMain.classList.add("header--opened");
  } else {
    navMain.classList.add("header--closed");
    navMain.classList.remove("header--opened");
  }
});

buttonClose.addEventListener("click", function () {
  navMain.classList.add("header--closed");
  navMain.classList.remove("header--opened");
});

let buttonLikeList = document.querySelectorAll(".gallery__like");


for (let element of buttonLikeList) {
  element.onclick = function () {
    let counterLike = element.querySelector(".gallery__like-counter");
    if (element.classList.contains("gallery__like-active")) {
      element.classList.remove("gallery__like-active");
      counterLike.textContent--;
    } else {
      element.classList.add("gallery__like-active")
      counterLike.textContent++;
    }
  }
}


let galleryList = document.querySelectorAll(".gallery__item"); 
  for (let element of galleryList) {
    let imageElement = element.querySelector(".gallery__image");
    imageElement.onclick = function () {
       element.classList.toggle("gallery__item-full");
       let galleryFull = element.querySelector(".gallery__image");
       galleryFull.classList.toggle("gallery__image-full");
    }
  }