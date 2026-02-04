document.addEventListener("DOMContentLoaded", () => {
  /* Mobile navigation */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const backdrop = document.querySelector(".backdrop");
  const closeMobileNav = document.querySelector(".close-mobile-nav");

  if (menuToggle && mobileNav && backdrop && closeMobileNav) {
    const openNav = () => {
      mobileNav.classList.add("open");
      backdrop.classList.add("visible");
      document.body.classList.add("no-scroll");
    };

    const closeNav = () => {
      mobileNav.classList.remove("open");
      backdrop.classList.remove("visible");
      document.body.classList.remove("no-scroll");
    };

    menuToggle.addEventListener("click", openNav);
    closeMobileNav.addEventListener("click", closeNav);
    backdrop.addEventListener("click", closeNav);

    mobileNav.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
  }

  /* Lazy-load image fade-in */
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  lazyImgs.forEach((img) => {
    img.addEventListener("load", () => img.classList.add("loaded"));
    if (img.complete) {
      img.classList.add("loaded");
    }
  });

  /* Highlight nav links on scroll (only internal links) */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  const onScroll = () => {
    let currentId = "";
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 100;
      if (scrollPos >= offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const matches = href === `#${currentId}`;
      link.classList.toggle("active", matches);
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // initial highlight
});
