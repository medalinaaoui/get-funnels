// window.onload = function () {
//   var testimonialSection = document.querySelector(".testimonial");
//   var images = testimonialSection.querySelectorAll(".testimonial-img");
//   var index = 0; // Track the index of the current image

//   function moveImagesToLeft() {
//     var currentImage = images[index];
//     currentImage.style.transform = "translateX(-100%)"; // Move the image to the left
//     index = (index + 1) % images.length; // Update index for the next image
//     setTimeout(function () {
//       testimonialSection.appendChild(currentImage); // Move the image to the end of the list
//       currentImage.style.transform = "none"; // Reset the transform
//     }, 1000); // Wait for the transition to complete (1 second) before moving the image
//   }

//   setInterval(moveImagesToLeft, 3000); // Change image every 3 seconds
// };
