
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

let galleryList = document.querySelectorAll(".gallery__item");

for (let element of galleryList) {
  element.onclick = function() {
    let galleryImage = element.querySelector(".gallery__preview");
    let galleryImageFull = document.querySelector(".gallery__image-full");
    galleryImageFull.src = galleryImage.src;
    
  }
}

let buttonLikeList = document.querySelectorAll(".gallery__like");

for (let element of buttonLikeList) {
  element.onclick = function() {
        
  }
}