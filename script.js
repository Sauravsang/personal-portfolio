document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const scrollUpBtn = document.querySelector(".scroll-up-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".navbar .menu");
  const menuItems = document.querySelectorAll(".navbar .menu li a");

  // Sticky navbar and scroll-up button visibility
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  // Scroll-up button functionality
  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scrolling for menu items
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // Toggle menu
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuBtn.querySelector("i").classList.toggle("active");
  });

  // Typing animation
  function typingEffect(element, words, typeSpeed, backSpeed) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      const displayText = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);

      element.textContent = displayText;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? backSpeed : typeSpeed);
      }
    }

    type();
  }

  const typingElements = [
    {
      selector: ".typing",
      words: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    },
    {
      selector: ".typing-2",
      words: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    },
  ];

  typingElements.forEach(function (item) {
    const element = document.querySelector(item.selector);
    if (element) {
      typingEffect(element, item.words, 100, 60);
    }
  });

  // Owl carousel (basic implementation)
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(function (carousel) {
    let startIndex = 0;
    const items = carousel.children;
    const itemCount = items.length;

    setInterval(function () {
      for (let i = 0; i < itemCount; i++) {
        items[i].style.display = i === startIndex ? "block" : "none";
      }
      startIndex = (startIndex + 1) % itemCount;
    }, 2000);
  });
});
