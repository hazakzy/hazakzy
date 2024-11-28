// lightbox.js

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image elements
var images = document.querySelectorAll(".expandable-img");

// Get the modal image element
var modalImg = document.getElementById("modal-img");

// Get the close button
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Loop through all images to add click event
images.forEach(function(img) {
  img.addEventListener("click", function() {
    var imgSrc = this.getAttribute("data-img");
    modal.style.display = "flex";
    modalImg.src = imgSrc;
  });
});

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside the image, close the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
