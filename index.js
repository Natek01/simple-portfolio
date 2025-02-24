document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger img");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".menu a");

  // Ensure the hamburger and menu elements exist before proceeding
  if (!hamburger || !menu) return;

  // Toggle menu visibility
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("slide");
  });

  // Smooth scroll & close menu
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default jump behavior

      const targetId = this.getAttribute("href"); // Get target section ID
      const targetElement = document.querySelector(targetId); // Find the target element

      if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start", // Align the section at the top of the viewport
        });

        // Close the menu after a slight delay
        setTimeout(() => {
          menu.classList.remove("slide");
        }, 300); // Adjust time to close after smooth scroll animation
      } else {
        console.error(`Target section with ID ${targetId} not found.`);
      }
    });
  });
});
