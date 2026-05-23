import logoUrl from "../../img/logo_label-fun-web.png";
import markLogoUrl from "../../img/logo_fun-web.png";

export const logo = logoUrl;
export const markLogo = markLogoUrl;
export const whatsappAryo = "https://wa.me/6281285745854";
export const whatsappArief = "https://wa.me/628118080700";

export function SectionTitle({ eyebrow, title, description, align = "center" }) {
  return `
    <div class="section-title section-title--${align} reveal">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
}

export function Button({ label, href, variant = "primary" }) {
  return `<a class="btn btn--${variant}" href="${href}">${label}</a>`;
}

export function icon(name) {
  const paths = {
    speed: '<path d="M4 13a8 8 0 0 1 16 0"/><path d="M12 13l4-5"/><path d="M5 19h14"/>',
    shield: '<path d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/>',
    file: '<path d="M7 3h7l4 4v14H7V3z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/>',
    bank: '<path d="M4 10h16"/><path d="M6 10v8"/><path d="M10 10v8"/><path d="M14 10v8"/><path d="M18 10v8"/><path d="M3 20h18"/><path d="M12 4l8 4H4l8-4z"/>',
    tax: '<path d="M7 4h10v16H7z"/><path d="M10 8h4"/><path d="M10 12h4"/><path d="M10 16h1"/><path d="M14 16h1"/>',
    bond: '<path d="M8 7a4 4 0 0 1 8 0v2H8V7z"/><path d="M6 9h12v11H6z"/><path d="M12 13v3"/>',
    travel: '<path d="M4 8h16v11H4z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M7 12h10"/><path d="M7 16h6"/>',
    users: '<path d="M16 20v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="8" r="4"/><path d="M20 20v-2a3 3 0 0 0-3-3"/><path d="M4 20v-2a3 3 0 0 1 3-3"/>',
    chat: '<path d="M5 5h14v10H8l-3 3V5z"/><path d="M8 9h8"/><path d="M8 12h5"/>',
    check: '<path d="M5 12l4 4L19 6"/>',
    arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    up: '<path d="M12 19V5"/><path d="M6 11l6-6 6 6"/>',
  };

  return `<svg aria-hidden="true" class="icon" viewBox="0 0 24 24">${paths[name] || paths.check}</svg>`;
}
