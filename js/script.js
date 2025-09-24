// Navbar scroll effect
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Reveal projects on scroll
const projects = document.querySelectorAll('.fade-in');
function revealOnScroll() {
  projects.forEach((project) => {
    const rect = project.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      project.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ✅ Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link (for mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Resume Print (if needed in future)
function printResume() {
  window.print();
}
