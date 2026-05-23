import { Button, logo, markLogo } from "./shared.js";

export function Navbar() {
  const links = [
    ["Home", "#home"],
    ["Tantangan Bisnis", "#pain-point"],
    ["Tentang Kami", "#about"],
    ["Layanan", "#services"],
    ["Workflow", "#workflow"],
    ["Keunggulan", "#why"],
    ["Kontak", "#contact"],
  ];

  return `
    <header class="navbar">
      <nav class="nav-shell" aria-label="Navigasi utama">
        <a class="brand" href="#home" aria-label="FUN Consulting Home">
          <span class="brand-mark">
            <img src="${markLogo}" alt="" />
          </span>
          <img class="brand-label" src="${logo}" alt="FUN Consulting" />
        </a>
        <button class="nav-toggle" type="button" aria-label="Buka menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links">
          ${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
          ${Button({ label: "Konsultasi", href: "#contact", variant: "primary nav-cta" })}
        </div>
      </nav>
    </header>
  `;
}
