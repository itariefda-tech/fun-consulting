import { Navbar } from "./components/Navbar.js";
import { HeroSlider } from "./components/HeroSlider.js";
import { TrustBar } from "./components/TrustBar.js";
import { BusinessChallenge } from "./components/BusinessChallenge.js";
import { AboutSection } from "./components/AboutSection.js";
import { ServicesSection } from "./components/ServicesSection.js";
import { WorkflowTimeline } from "./components/WorkflowTimeline.js";
import { WhyChooseUs } from "./components/WhyChooseUs.js";
import { ClientShowcase } from "./components/ClientShowcase.js";
import { Testimonials } from "./components/Testimonials.js";
import { CTASection } from "./components/CTASection.js";
import { Footer } from "./components/Footer.js";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp.js";
import { BackToTop } from "./components/BackToTop.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Navbar()}
  <main>
    ${HeroSlider()}
    ${TrustBar()}
    ${BusinessChallenge()}
    ${AboutSection()}
    ${ServicesSection()}
    ${WorkflowTimeline()}
    ${WhyChooseUs()}
    ${ClientShowcase()}
    ${Testimonials()}
    ${CTASection()}
  </main>
  ${Footer()}
  ${FloatingWhatsApp()}
  ${BackToTop()}
`;

const navbar = document.querySelector(".navbar");
const mobileToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".hero-dot")];
const backToTop = document.querySelector(".back-to-top");
let activeSlide = 0;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

setInterval(() => showSlide(activeSlide + 1), 6800);

mobileToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  mobileToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 32;
  navbar.classList.toggle("is-scrolled", scrolled);
  backToTop.classList.toggle("is-visible", window.scrollY > 520);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
