"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const productsElement = document.getElementById("product-list");
  const productWidth = document.querySelector(".product").clientWidth + 2 * 12; 
  const productsPerPage = 5;
  const totalShiftWidth = productWidth * productsPerPage; 
  let currentPage = 0;
  const totalPages = Math.ceil(15 / productsPerPage); 

  document
    .getElementById("prev-button")
    .addEventListener("click", () => moveCarousel(-1));
  document
    .getElementById("next-button")
    .addEventListener("click", () => moveCarousel(1));

  const navDots = document.querySelectorAll(".nav-dot");
  navDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentPage = index;
      moveCarousel(0); 
    });
  });

  function moveCarousel(direction) {
    currentPage += direction;
    currentPage = Math.max(0, Math.min(currentPage, totalPages - 1));

    const shiftAmount = -currentPage * totalShiftWidth;
    productsElement.style.transform = `translateX(${shiftAmount}px)`;

    
    updateDots(currentPage);
  }

  function updateDots(index) {
    navDots.forEach((dot) => dot.classList.remove("active"));
    navDots[index].classList.add("active");
  }
});
