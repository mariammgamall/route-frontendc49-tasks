document.addEventListener("DOMContentLoaded", function () {

  /* Feature 1: Active Navbar Link on Scroll */
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  var sections = document.querySelectorAll("section[id]");

  function updateActiveNavLink() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 140;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });

        var activeLink = document.querySelector('.navbar-nav .nav-link[href="#' + sectionId + '"]');
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink);
  updateActiveNavLink();


  /* Feature 2: Dark and Light Theme Switcher */
  var themeToggleBtn = document.getElementById("theme-toggle-btn");
  var htmlTag = document.documentElement;

  var savedTheme = localStorage.getItem("user-theme");
  if (savedTheme === "dark") {
    htmlTag.classList.add("dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      if (htmlTag.classList.contains("dark")) {
        htmlTag.classList.remove("dark");
        localStorage.setItem("user-theme", "light");
      } else {
        htmlTag.classList.add("dark");
        localStorage.setItem("user-theme", "dark");
      }
    });
  }


  /* Feature 3: Portfolio Category Filter Tabs */
  var filterButtons = document.querySelectorAll(".portfolio-filter-btn");
  var portfolioCards = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      this.classList.add("active");

      var selectedCategory = this.getAttribute("data-filter");

      portfolioCards.forEach(function (card) {
        var cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || selectedCategory === cardCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });


  /* Feature 4: Testimonials Simple Vanilla JS Carousel */
  var testimonialSlides = document.querySelectorAll(".testimonial-card-item");
  var prevSlideBtn = document.getElementById("prev-testimonial-btn");
  var nextSlideBtn = document.getElementById("next-testimonial-btn");
  var dotsContainer = document.getElementById("carousel-dots-container");

  var currentSlideIndex = 0;
  var totalSlides = testimonialSlides.length;

  if (dotsContainer && totalSlides > 0) {
    dotsContainer.innerHTML = "";
    for (var i = 0; i < totalSlides; i++) {
      var dotBtn = document.createElement("button");
      dotBtn.className = "dot-indicator" + (i === 0 ? " active" : "");
      dotBtn.setAttribute("data-slide", i);

      dotBtn.addEventListener("click", function () {
        var slideNum = parseInt(this.getAttribute("data-slide"));
        currentSlideIndex = slideNum;
        displaySlide(currentSlideIndex);
      });

      dotsContainer.appendChild(dotBtn);
    }
  }

  function displaySlide(index) {
    testimonialSlides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    if (testimonialSlides[index]) {
      testimonialSlides[index].classList.add("active");
    }

    var allDots = document.querySelectorAll(".dot-indicator");
    allDots.forEach(function (dot, dotIndex) {
      if (dotIndex === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  if (nextSlideBtn) {
    nextSlideBtn.addEventListener("click", function () {
      currentSlideIndex = currentSlideIndex + 1;
      if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
      }
      displaySlide(currentSlideIndex);
    });
  }

  if (prevSlideBtn) {
    prevSlideBtn.addEventListener("click", function () {
      currentSlideIndex = currentSlideIndex - 1;
      if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
      }
      displaySlide(currentSlideIndex);
    });
  }

  if (totalSlides > 0) {
    displaySlide(0);
  }


  /* Feature 5: Customization Sidebar (Colors & Fonts) */
  var sidebarGearBtn = document.getElementById("sidebar-toggle-btn");
  var sidebarPanel = document.getElementById("customization-sidebar");
  var sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  var colorBtns = document.querySelectorAll(".color-option-btn");
  var fontBtns = document.querySelectorAll(".font-option-btn");
  var resetBtn = document.getElementById("reset-settings-btn");

  if (sidebarGearBtn && sidebarPanel) {
    sidebarGearBtn.addEventListener("click", function () {
      sidebarPanel.classList.toggle("open");
    });
  }

  if (sidebarCloseBtn && sidebarPanel) {
    sidebarCloseBtn.addEventListener("click", function () {
      sidebarPanel.classList.remove("open");
    });
  }

  colorBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var primary = this.getAttribute("data-primary");
      var secondary = this.getAttribute("data-secondary");

      htmlTag.style.setProperty("--primary-color", primary);
      htmlTag.style.setProperty("--secondary-color", secondary);

      colorBtns.forEach(function (b) { b.classList.remove("active"); });
      this.classList.add("active");
    });
  });

  fontBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var chosenFont = this.getAttribute("data-font");

      htmlTag.style.setProperty("--main-font", chosenFont);

      fontBtns.forEach(function (b) { b.classList.remove("active"); });
      this.classList.add("active");
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      htmlTag.style.setProperty("--primary-color", "#6366f1");
      htmlTag.style.setProperty("--secondary-color", "#8b5cf6");
      htmlTag.style.setProperty("--main-font", "'Tajawal', sans-serif");

      colorBtns.forEach(function (b) { b.classList.remove("active"); });
      fontBtns.forEach(function (b) { b.classList.remove("active"); });

      if (colorBtns[0]) colorBtns[0].classList.add("active");
      if (fontBtns[0]) fontBtns[0].classList.add("active");
    });
  }


  /* Feature 6: Scroll to Top Button */
  var scrollTopBtn = document.getElementById("scroll-top-btn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* Contact Form Handler */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("شكراً لتواصلك مع المهندسة مريم جمال! تم استلام رسالتك بنجاح.");
      contactForm.reset();
    });
  }

});