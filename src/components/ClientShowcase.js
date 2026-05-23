import { SectionTitle } from "./shared.js";

export function ClientShowcase() {
  const clients = ["Corporate Group", "Travel Umroh", "Contractor", "Service Company", "Growing SME", "Tender Partner"];
  const list = [...clients, ...clients];

  return `
    <section class="section clients">
      <div class="container">
        ${SectionTitle({
          eyebrow: "Client Showcase",
          title: "Dipercaya berbagai kebutuhan bisnis perusahaan.",
          description: "Dari perusahaan berkembang, travel haji dan umroh, kontraktor, hingga bisnis jasa yang membutuhkan dokumen siap tender.",
        })}
        <div class="client-marquee reveal">
          <div class="client-track">
            ${list.map((client) => `<div class="client-logo">${client}</div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
