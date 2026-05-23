import { icon } from "./shared.js";

export function TrustBar() {
  const items = [
    ["Fast Process", "Alur kerja cepat dan jelas.", "speed"],
    ["Professional Team", "Pendampingan oleh tim berpengalaman.", "users"],
    ["Secure Documentation", "Dokumen dijaga aman dan rahasia.", "shield"],
    ["Trusted Business Partner", "Solusi untuk kebutuhan perusahaan.", "check"],
  ];

  return `
    <section class="trust-bar-section">
      <div class="container trust-bar reveal">
        ${items.map(([title, text, iconName]) => `<div class="trust-item">${icon(iconName)}<div><b>${title}</b><span>${text}</span></div></div>`).join("")}
      </div>
    </section>
  `;
}
