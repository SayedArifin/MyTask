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

function startJackpot() {
  const slots = document.querySelectorAll(".slot");
  let count = 0;
  const interval = setInterval(() => {
    const numbers = [];
    slots.forEach((slot) => {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      slot.textContent = randomNumber;
      numbers.push(randomNumber);
    });
    if (count === 10) {
      clearInterval(interval);
      const isJackpot = numbers.every((num) => num === numbers[0]);
      if (isJackpot) {
        alert("Congratulations! It Seems You Are Lucky Today!");
      } else {
        alert("Better luck next time!");
      }
    }
    count++;
  }, 200);
}

window.onload = function () {
  setTimeout(startJackpot, 3000); // 3000 milliseconds = 3 seconds
};

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

function startJackpot() {
  const slots = document.querySelectorAll(".slot");
  let count = 0;
  const interval = setInterval(() => {
    const numbers = [];
    slots.forEach((slot) => {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      slot.textContent = randomNumber;
      numbers.push(randomNumber);
    });
    if (count === 10) {
      clearInterval(interval);
      const isJackpot = numbers.every((num) => num === numbers[0]);
      if (isJackpot) {
        showToast("Congratulations! It Seems You Are Lucky Today!");
      } else {
        showToast("Better luck next time!");
      }
    }
    count++;
  }, 200);
}

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
