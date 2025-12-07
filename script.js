// EmailJS setup
emailjs.init("2EKhuE62jAGb0hcLg");
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_in3g9cl', 'template_2zu83va', this)
    .then(() => {
      document.getElementById("modal").style.display = "flex";
    }, (error) => {
      alert('Error: ' + error.text);
    });
});

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Hero slideshow
const heroSlides = document.querySelectorAll(".hero-slide");
let currentHero = 0;

function showHeroSlide(i) {
  heroSlides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === i) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  currentHero = (currentHero + 1) % heroSlides.length;
  showHeroSlide(currentHero);
}, 5000);

// Gallery carousel
const gallerySlides = document.querySelectorAll(".carousel img");
let currentGallery = 0;

function showGallerySlide(i) {
  gallerySlides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === i) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  currentGallery = (currentGallery + 1) % gallerySlides.length;
  showGallerySlide(currentGallery);
}, 4000);

// Scroll reveal
const revealSections = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
