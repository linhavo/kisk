// Fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  },
  { threshold: 0.08 },
);

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
