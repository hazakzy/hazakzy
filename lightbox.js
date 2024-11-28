document.querySelectorAll('.expandable-img').forEach(image => {
    image.addEventListener('click', function (event) {
        const imgSrc = event.target.getAttribute('data-img'); // Get the image source from the data-img attribute
        const modal = document.createElement('div'); // Create a new div for the modal
        modal.classList.add('modal'); // Add the modal class for styling

        // Create an img element and set the source to the clicked image's data-img
        const modalImg = document.createElement('img');
        modalImg.src = imgSrc;
        modalImg.classList.add('modal-content'); // Add a class for the modal content styling
        modal.appendChild(modalImg); // Append the image to the modal

        document.body.appendChild(modal); // Append the modal to the body

        // Close the modal when clicked
        modal.addEventListener('click', () => {
            document.body.removeChild(modal); // Remove the modal on click
        });
    });
});
