let headlines = document.querySelectorAll(".headline");
headlines.forEach(function (headline) {
  headline.addEventListener("mouseover", function () {
    headline.style.animationPlayState = "paused";
  });
  headline.addEventListener("mouseout", function () {
    headline.style.animationPlayState = "running";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".cashback-item");
  let currentIndex = 0;

  items[currentIndex].classList.add("active");

  function nextItem() {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }

  setTimeout(function () {
    setInterval(nextItem, 3000);
  }, 3000);
});

window.onload = function () {
  let numbers = document.querySelectorAll(".jackpot__number");
  updateNumbers(numbers);

  setInterval(function () {
    updateNumbers(numbers);
  }, getRandomDelay());
};

function updateNumbers(numbers) {
  numbers.forEach(function (number) {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    number.textContent = randomNumber;
    number.classList.add("show");
  });
}

function getRandomDelay() {
  return Math.floor(Math.random() * 3000) + 1000;
}
