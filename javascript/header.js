const observeMainImage = new IntersectionObserver((vals) => {
  vals.forEach((val) => {
    if (val.isIntersecting) {
      val.target.classList.add("header-main-image-show");
    } else {
      val.target.classList.remove("header-main-image-show");
    }
  });
});

const mainImage = document.querySelectorAll(".header-main-image-hidden");
mainImage.forEach((mainImage) => {
  observeMainImage.observe(mainImage);
});

const observeMainText = new IntersectionObserver((vals) => {
  vals.forEach((val) => {
    if (val.isIntersecting) {
      val.target.classList.add("header-main-text-show");
    } else {
      val.target.classList.remove("header-main-text-show");
    }
  });
});

const mainText = document.querySelectorAll(".header-main-text-hidden");
mainText.forEach((mainText) => {
  observeMainText.observe(mainText);
});

const observefromBottom = new IntersectionObserver((vals) => {
  vals.forEach((val) => {
    if (val.isIntersecting) {
      val.target.classList.add("bottom-show");
    } else {
      val.target.classList.remove("bottom-show");
    }
  });
});

const fromBottom = document.querySelectorAll(".bottom-hidden");
fromBottom.forEach((fromBottom) => {
  observefromBottom.observe(fromBottom);
});
const observefromBottomPages = new IntersectionObserver((vals) => {
  vals.forEach((val) => {
    if (val.isIntersecting) {
      val.target.classList.add("bottom-show-pages");
    } else {
      val.target.classList.remove("bottom-show-pages");
    }
  });
});

const fromBottomPage = document.querySelectorAll(".bottom-hidden-pages");
fromBottomPage.forEach((fromBottomPage) => {
  observefromBottomPages.observe(fromBottomPage);
});
