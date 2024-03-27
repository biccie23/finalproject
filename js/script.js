/* NAVBAR TOGGLE FOR WHEN CONVERTS TO BURGER MENU */


document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const introContainer = document.querySelector('.intro-container');

    navToggle.addEventListener('click', function() {
        introContainer.classList.toggle('intro-active');
        
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.toggle('active');
        }
    });
});


/* NAVBAR STICK TO TOP OF PAGE WHEN SCROLLING UPWARDS */

let lastScrollTop = 0;
let isNavbarVisible = true;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let navbar = document.querySelector(".navbar");

  if (currentScroll > lastScrollTop && isNavbarVisible) {
    // Downscroll code
    navbar.classList.remove("show-nav");
    isNavbarVisible = false;
  } else if (currentScroll < lastScrollTop && !isNavbarVisible) {
    // Upscroll code
    navbar.classList.add("show-nav");
    isNavbarVisible = true;
  }

  lastScrollTop = currentScroll;
}, false);


