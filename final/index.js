const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

let headlines = document.querySelectorAll(".headline");
headlines.forEach(function (headline) {
  headline.addEventListener("mouseover", function () {
    headline.style.animationPlayState = "paused";
  });
  headline.addEventListener("mouseout", function () {
    headline.style.animationPlayState = "running";
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Autoplay
  autoplay: {
    delay: 3000, // Change delay as needed (in milliseconds)
    disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function animateCounter(element, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;

  function updateCounter() {
    current += increment;
    element.textContent = current.toString().padStart(8, "0");

    if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
      setTimeout(updateCounter, 100); // Delay for each count (1 second)
    }
  }

  updateCounter();
}

// Usage
let counterElement = document.getElementById("counter");
animateCounter(counterElement, 13482649, 99999999, 5000);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

showSlide(0);
setInterval(nextSlide, 3000);

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

window.onload = function () {
  setTimeout(startJackpot, 3000); // 3000 milliseconds = 3 seconds
};

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

window.onload = function () {
  setTimeout(startJackpot, 3000); // 3000 milliseconds = 3 seconds
};
