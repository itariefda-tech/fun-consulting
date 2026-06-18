import { SectionTitle, editMeta } from "./shared.js";

export function ClientShowcase() {
  const clients = ["Corporate Group", "Travel Umroh", "Contractor", "Service Company", "Growing SME", "Tender Partner"];
  const list = [...clients, ...clients];

  return `
    <section class="section clients" id="clients" ${editMeta({ id: "clients", key: "client-showcase-section", routeName: "#clients", component: "ClientShowcase" })}>
      <div class="container">
        ${SectionTitle({
          eyebrow: "Client Showcase",
          title: "Dipercaya berbagai kebutuhan bisnis perusahaan.",
          description: "Dari perusahaan berkembang, travel haji dan umroh, kontraktor, hingga bisnis jasa yang membutuhkan dokumen siap tender.",
        })}
        <div class="client-marquee reveal" ${editMeta({ id: "client-marquee", key: "client-marquee", routeName: "#clients", component: "ClientShowcase.Marquee" })}>
          <div class="client-track">
            ${list.map((client, index) => `<div class="client-logo" ${editMeta({ id: `client-logo-${index + 1}`, key: `client-${client.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index + 1}`, routeName: "#clients", component: "ClientShowcase.Logo" })}>${client}</div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
