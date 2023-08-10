"use strict";

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav--toggle", "nav--menu");

//////////////////
// GSAP Animation

// home section animation
gsap.from(".home-title", { opacity: -1, duration: 1.5, delay: 1 });
gsap.from(".home-img", { opacity: 0, duration: 1, delay: 1, x: 100 });
gsap.from(".home-information", { opacity: 0, duration: 1, delay: 1.2, y: -30 });

// box section animation
gsap.from(".box-medium", { opacity: 0, duration: 1.5, delay: 1.3, y: -50 });
gsap.from(".box-small", { opacity: 0, duration: 1.5, delay: 1.4, y: -50 });
