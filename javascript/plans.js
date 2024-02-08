const observe = new IntersectionObserver((vals) => {
  vals.forEach((val) => {
    if (val.isIntersecting) {
      val.target.classList.add("flip-vertical-right");
    } else {
      val.target.classList.remove("flip-vertical-right");
    }
  });
});

const rotates = document.querySelectorAll(".rotate-start");
rotates.forEach((rotate) => {
  observe.observe(rotate);
});
