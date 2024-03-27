let lastScrollTop = 0;
let isNavbarVisible = true;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Declare currentScroll here
  
  if (currentScroll > lastScrollTop && isNavbarVisible) {
    // Downscroll code
    document.querySelector(".navbar").classList.remove("show");
    isNavbarVisible = false;
   
  } else if (currentScroll < lastScrollTop && !isNavbarVisible) {
    // Upscroll code
    document.querySelector(".navbar").classList.add("show");
    isNavbarVisible = true;
    
  }

  lastScrollTop = currentScroll; // Move this line inside the event listener function
}, false);