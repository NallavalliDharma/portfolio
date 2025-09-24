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

// Mobile Menu Toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('show');
    });
  });
}

// Resume Print
function printResume() {
  window.print();
}
