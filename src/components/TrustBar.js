import { editMeta, icon } from "./shared.js";

export function TrustBar() {
  const items = [
    ["Fast Process", "Alur kerja cepat dan jelas.", "speed"],
    ["Professional Team", "Pendampingan oleh tim berpengalaman.", "users"],
    ["Secure Documentation", "Dokumen dijaga aman dan rahasia.", "shield"],
    ["Trusted Business Partner", "Solusi untuk kebutuhan perusahaan.", "check"],
  ];

  return `
    <section class="trust-bar-section" ${editMeta({ id: "trust-bar-section", key: "trust-bar-section", routeName: "#home", component: "TrustBar" })}>
      <div class="container trust-bar reveal" ${editMeta({ id: "trust-bar", key: "trust-bar-list", routeName: "#home", component: "TrustBar.List" })}>
        ${items.map(([title, text, iconName], index) => `<div class="trust-item" ${editMeta({ id: `trust-item-${index + 1}`, key: `trust-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, routeName: "#home", component: "TrustBar.Item" })}>${icon(iconName)}<div><b>${title}</b><span>${text}</span></div></div>`).join("")}
      </div>
    </section>
  `;
}
