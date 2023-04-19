function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navbarHeight = 60; // Change this value based on your navbar height
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }