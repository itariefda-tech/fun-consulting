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
const navItems = [...document.querySelectorAll(".nav-links a[href^='#']:not(.btn)")];
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
  link.addEventListener("click", (event) => {
    if (link.classList.contains("nav-link")) {
      setActiveNav(link.getAttribute("href"));
    }
    navLinks.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
  });
});

function setActiveNav(hash) {
  navItems.forEach((item) => {
    const active = item.getAttribute("href") === hash;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-current", active ? "page" : "false");
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveNav(`#${visible.target.id}`);
    }
  },
  {
    rootMargin: "-28% 0px -55% 0px",
    threshold: [0.12, 0.28, 0.48],
  }
);

navItems.forEach((item) => {
  const target = document.querySelector(item.getAttribute("href"));
  if (target) sectionObserver.observe(target);
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
