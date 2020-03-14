const slideshowImages =document.querySelectorAll(".intro .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;


// slideShowImages[currentImageCounter],style.display = "block";
slideshowImages[currentImageCounter].style.opactity = 1;


setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideShowImages[currentImageCounter],style.display = "none";
  slideshowImages[currentImageCounter].style.opactity = 0;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  // slideShowImages[currentImageCounter],style.display = "block";
  slideshowImages[currentImageCounter].style.opactity = 1;
}