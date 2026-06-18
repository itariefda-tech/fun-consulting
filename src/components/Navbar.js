import { Button, editMeta, logo, markLogo } from "./shared.js";

export function Navbar() {
  const links = [
    ["Home", "#home"],
    ["Tantangan", "#pain-point"],
    ["About Us", "#about"],
    ["Layanan", "#services"],
    ["Workflow", "#workflow"],
    ["Keunggulan", "#why"],
    ["Kontak", "#contact"],
  ];

  return `
    <header class="navbar" ${editMeta({ id: "navbar", key: "layout-navbar", routeName: "global", component: "Navbar" })}>
      <nav class="nav-shell" aria-label="Navigasi utama">
        <a class="brand" href="#home" aria-label="FUN Consulting Home" ${editMeta({ id: "brand-logo", key: "navbar-brand", routeName: "global", component: "Navbar.Brand" })}>
          <span class="brand-mark">
            <img src="${markLogo}" alt="" />
          </span>
          <img class="brand-label" src="${logo}" alt="FUN Consulting" />
        </a>
        <button class="nav-toggle" type="button" aria-label="Buka menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links" ${editMeta({ id: "nav-links", key: "navbar-links", routeName: "global", component: "Navbar.Links" })}>
          ${links.map(([label, href], index) => `<a class="nav-link${index === 0 ? " is-active" : ""}" href="${href}" ${index === 0 ? 'aria-current="page"' : 'aria-current="false"'} ${editMeta({ id: `nav-link-${href.replace("#", "")}`, key: `navbar-link-${index}`, routeName: href, component: "Navbar.Link" })}>${label}</a>`).join("")}
          ${Button({ label: "Konsultasi", href: "#contact", variant: "primary nav-cta" })}
        </div>
      </nav>
    </header>
  `;
}
