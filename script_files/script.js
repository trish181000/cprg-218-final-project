const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

function showNextImage() {
  const nextIndex = (currentIndex + 1) % galleryItems.length; // Calculate next index
  galleryItems[currentIndex].classList.remove('active');
  galleryItems[nextIndex].classList.add('active');
  currentIndex = nextIndex;
}

setInterval(showNextImage, 2000); // Change image every 2 seconds (2000 milliseconds)

