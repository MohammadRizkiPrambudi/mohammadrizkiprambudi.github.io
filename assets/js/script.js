// Set the current year in the footer
let date = new Date();
let tahun = date.getFullYear();
document.getElementById("tahun").innerText = tahun;

// Lightbox options
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

// Handle active navigation links
$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // Intersection Observer for scroll animations
  const faders = document.querySelectorAll(
    ".fade-in-up, .fade-in, .slide-in-right, .slide-in-left"
  );

  const appearOptions = {
    threshold: 0.1, // When 10% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Adjust to trigger animation a bit earlier
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("animate");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // Trigger animations on elements already in viewport on load
  faders.forEach((fader) => {
    const rect = fader.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      fader.classList.add("animate");
    }
  });

  // Typed.js for typing effect
  var typed = new Typed("#typed-name", {
    strings: ["Mohammad Rizki Prambudi"], // Strings to type out
    typeSpeed: 70, // Typing speed in milliseconds
    backSpeed: 30, // Backspacing speed in milliseconds
    backDelay: 1500, // Delay before backspacing (milliseconds)
    startDelay: 500, // Delay before typing starts (milliseconds)
    loop: true, // Loop the animation indefinitely
    showCursor: true, // Show the typing cursor
    cursorChar: "|", // Character for the cursor
  });
});
