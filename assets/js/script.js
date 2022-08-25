'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
};

/**
 * portfolio modal
 */

const triggers = document.getElementsByClassName("btn-link");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("modal");
const closeButtons = document.getElementsByClassName("close-button");

// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close
for (let [index, trigger] of triggerArray) {
 const toggleModal = () => {
   modals[index].classList.toggle('show-modal');
 }
 
 trigger.addEventListener("click", toggleModal);
 closeButtons[index].addEventListener("click", toggleModal);

 window.addEventListener('click', function(event){
  if(event.target === modals[index]){
    modals[index].classList.toggle("show-modal");
  }          
  });
};


/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});