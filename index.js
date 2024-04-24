let headlines = document.querySelectorAll(".headline");
headlines.forEach(function (headline) {
  headline.addEventListener("mouseover", function () {
    headline.style.animationPlayState = "paused";
  });
  headline.addEventListener("mouseout", function () {
    headline.style.animationPlayState = "running";
  });
});
