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
import {
  OWNER_PASSWORD,
  fallbackServices,
  getServices,
  saveServices,
  resetServices,
  serviceIconOptions,
  escapeHtml,
} from "./serviceData.js";

const app = document.querySelector("#app");
const OWNER_AUTH_KEY = "fun-owner-authenticated";
let ownerModeActive = false;

function renderHome() {
  const inspectorQuery = new URLSearchParams(window.location.search).get("inspect");
  const inspectorEnabled = inspectorQuery === "1";

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
    ${inspectorEnabled ? '<button class="edit-inspector-toggle" type="button" aria-pressed="true">ID</button>' : ""}
  `;

  setupHomeInteractions(inspectorEnabled);
}

function setupHomeInteractions(inspectorEnabled) {
  const navbar = document.querySelector(".navbar");
  const mobileToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = [...document.querySelectorAll(".nav-links a[href^='#']:not(.btn)")];
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".hero-dot")];
  const backToTop = document.querySelector(".back-to-top");
  const editInspectorToggle = document.querySelector(".edit-inspector-toggle");
  let activeSlide = 0;

  function setEditInspector(active) {
    document.body.classList.toggle("show-edit-tags", active);
    if (!editInspectorToggle) return;
    editInspectorToggle.setAttribute("aria-pressed", String(active));
    editInspectorToggle.classList.toggle("is-active", active);
  }

  localStorage.removeItem("fun-edit-inspector");
  setEditInspector(inspectorEnabled);

  if (editInspectorToggle) {
    editInspectorToggle.addEventListener("click", () => {
      setEditInspector(!document.body.classList.contains("show-edit-tags"));
    });
  }

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
  setupOwnerLogoHold();
}

function setupOwnerLogoHold() {
  const brand = document.querySelector(".brand");
  if (!brand) return;

  let holdTimer = null;
  let ownerTriggered = false;

  const startHold = () => {
    ownerTriggered = false;
    window.clearTimeout(holdTimer);
    holdTimer = window.setTimeout(() => {
      ownerTriggered = true;
      window.location.hash = "owner-credential";
    }, 5000);
  };

  const stopHold = () => {
    window.clearTimeout(holdTimer);
  };

  brand.addEventListener("mousedown", startHold);
  brand.addEventListener("touchstart", startHold, { passive: true });
  ["mouseup", "mouseleave", "touchend", "touchcancel"].forEach((eventName) => {
    brand.addEventListener(eventName, stopHold);
  });
  brand.addEventListener("click", (event) => {
    if (ownerTriggered) {
      event.preventDefault();
      ownerTriggered = false;
    }
  });
}

function renderOwnerPage() {
  const authenticated = sessionStorage.getItem(OWNER_AUTH_KEY) === "yes";

  app.innerHTML = `
    <main class="owner-page">
      <section class="owner-shell">
        <div class="owner-header">
          <span class="eyebrow">Owner Credential</span>
          <h1>Builder Layanan</h1>
          <p>Area ini hanya untuk menambah dan mengedit isi card layanan.</p>
        </div>
        ${authenticated ? ownerBuilderTemplate() : ownerLoginTemplate()}
      </section>
    </main>
  `;

  if (authenticated) {
    setupOwnerBuilder();
  } else {
    setupOwnerLogin();
  }
}

function ownerLoginTemplate(message = "") {
  return `
    <form class="owner-login glass-card" autocomplete="off">
      <label for="owner-password">Password Owner</label>
      <div class="owner-password-row">
        <input id="owner-password" name="password" type="password" required placeholder="Masukkan password" />
        <button class="btn btn--primary" type="submit">Masuk</button>
      </div>
      <p class="owner-error" role="alert">${escapeHtml(message)}</p>
    </form>
  `;
}

function serviceEditorRow(service, index) {
  return `
    <article class="owner-service-row glass-card" data-index="${index}">
      <div class="owner-row-head">
        <span>Layanan ${index + 1}</span>
        <button class="owner-remove" type="button" data-remove="${index}" aria-label="Hapus layanan ${index + 1}">Hapus</button>
      </div>
      <label>
        Judul
        <input name="title" value="${escapeHtml(service.title)}" required />
      </label>
      <label>
        Deskripsi
        <textarea name="text" rows="4" required>${escapeHtml(service.text)}</textarea>
      </label>
      <label>
        Ikon / Siluet
        <select name="iconName">
          ${serviceIconOptions.map(([value, label]) => `<option value="${value}" ${service.iconName === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
    </article>
  `;
}

function ownerBuilderTemplate() {
  const services = getServices();

  return `
    <div class="owner-toolbar">
      <button class="btn btn--primary" type="button" data-owner-add>Tambah Layanan</button>
      <a class="btn btn--secondary" href="#home">Kembali ke Website</a>
    </div>
    <div class="owner-builder" data-owner-builder>
      ${services.map(serviceEditorRow).join("")}
    </div>
    <div class="owner-actions-bottom">
      <button class="btn btn--primary" type="button" data-owner-save>Simpan Perubahan</button>
      <button class="owner-text-button" type="button" data-owner-reset>Reset default</button>
    </div>
    <p class="owner-note">Perubahan tersimpan di browser ini dan langsung dipakai section layanan setelah kembali ke website.</p>
  `;
}

function collectOwnerServices() {
  return [...document.querySelectorAll(".owner-service-row")].map((row) => ({
    title: row.querySelector('[name="title"]').value,
    text: row.querySelector('[name="text"]').value,
    iconName: row.querySelector('[name="iconName"]').value,
  }));
}

function refreshOwnerBuilder(services = getServices()) {
  const builder = document.querySelector("[data-owner-builder]");
  if (!builder) return;
  builder.innerHTML = services.map(serviceEditorRow).join("");
}

function setupOwnerBuilder() {
  document.querySelector("[data-owner-add]").addEventListener("click", () => {
    const services = collectOwnerServices();
    services.push({
      title: "Layanan Baru",
      text: "Tulis deskripsi singkat layanan di sini.",
      iconName: "file",
    });
    refreshOwnerBuilder(services);
  });

  document.querySelector("[data-owner-save]").addEventListener("click", () => {
    saveServices(collectOwnerServices());
    refreshOwnerBuilder();
  });

  document.querySelector("[data-owner-reset]").addEventListener("click", () => {
    resetServices();
    refreshOwnerBuilder(fallbackServices);
  });

  document.querySelector("[data-owner-builder]").addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove]");
    if (!removeButton) return;

    const index = Number(removeButton.dataset.remove);
    const services = collectOwnerServices().filter((_, serviceIndex) => serviceIndex !== index);
    refreshOwnerBuilder(services);
  });
}

function setupOwnerLogin() {
  const form = document.querySelector(".owner-login");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = new FormData(form).get("password");

    if (password === OWNER_PASSWORD) {
      sessionStorage.setItem(OWNER_AUTH_KEY, "yes");
      renderOwnerPage();
      return;
    }

    form.outerHTML = ownerLoginTemplate("Password owner salah.");
    setupOwnerLogin();
  });
}

function renderApp() {
  ownerModeActive = window.location.hash === "#owner-credential";
  document.body.classList.toggle("owner-mode", ownerModeActive);

  if (ownerModeActive) {
    renderOwnerPage();
    return;
  }

  renderHome();
}

window.addEventListener("hashchange", () => {
  const nextOwnerMode = window.location.hash === "#owner-credential";

  if (nextOwnerMode || ownerModeActive) {
    renderApp();
  }
});
renderApp();
