document.addEventListener("DOMContentLoaded", function () {
  // Array of image URLs
  const images = [
    'url("./images/background-1.jpg")',
    'url("./images/background-2.jpg")',
    'url("./images/background-3.jpg")',
    'url("./images/background-4.jpg")',
    'url("./images/background-5.jpg")',
    'url("./images/background-6.jpg")',
  ];

  let currentIndex = 0; // Start with the first image
  const section = document.getElementById("background_images"); // Get the section element
  const dots = document.querySelectorAll(".dot"); // Get all dot elements

  // Function to change the background image
  function changeBackground(index) {
    section.style.backgroundImage = images[index]; // Set the new background image
    // Remove the 'active' class from all dots
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
    // Add the 'active' class to the current dot
    dots[index].classList.add("active");
    currentIndex = index; // Updating the current index
  }

  // Add click event listeners to each dot
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      changeBackground(index); // Change the background when the dot is clicked
    });
  });

  // Function to automatically change the background image
  function autoChangeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    changeBackground(currentIndex); // Change the background
  }

  // Change the background image every 3 seconds
  setInterval(autoChangeBackground, 3000);

  // Set the initial background image
  changeBackground(currentIndex);
});

// Form section
