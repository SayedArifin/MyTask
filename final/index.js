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
  let current = start.toString().padStart(8, "0");
  let final = end.toString().padStart(8, "0");

  function updateCounter() {
    let newStr = "";
    for (let i = 0; i < current.length; i++) {
      newStr += Math.floor(Math.random() * 10); // Random digit
    }
    element.textContent = newStr;

    if (newStr !== final) {
      setTimeout(updateCounter, Math.random() * 150); // Random delay between 0 and 500 milliseconds
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

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
