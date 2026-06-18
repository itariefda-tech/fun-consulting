import { getServices, escapeHtml, slugify } from "../serviceData.js";
import { SectionTitle, editMeta, icon, whatsappAryo } from "./shared.js";

const cardAccents = [
  ["#00c2c7", "#d4af37"],
  ["#38bdf8", "#22c55e"],
  ["#f59e0b", "#00c2c7"],
  ["#a78bfa", "#f472b6"],
  ["#14b8a6", "#f97316"],
  ["#60a5fa", "#e6c768"],
];

export function ServicesSection() {
  const services = getServices();
  const sliderServices = [...services, ...services];
  const serviceCard = (service, index, duplicate = false) => {
    const accent = cardAccents[index % cardAccents.length];
    const safeTitle = escapeHtml(service.title);
    const safeText = escapeHtml(service.text);
    const serviceSlug = slugify(service.title) || `item-${index}`;

    return `
      <article class="service-card glass-card reveal service-card--${escapeHtml(service.iconName)}" style="--accent-a: ${accent[0]}; --accent-b: ${accent[1]};" ${duplicate ? 'aria-hidden="true"' : ""} ${editMeta({ id: `service-card-${serviceSlug}-${duplicate ? "loop" : "main"}`, key: `service-${serviceSlug}`, routeName: "#services", component: "ServicesSection.ServiceCard" })}>
        <div class="service-silhouette">${icon(service.iconName)}</div>
        <div class="service-icon">${icon(service.iconName)}</div>
        <h3>${safeTitle}</h3>
        <p>${safeText}</p>
        <a href="${whatsappAryo}">Konsultasikan ${icon("arrow")}</a>
      </article>
    `;
  };

  return `
    <section class="section services" id="services" ${editMeta({ id: "services", key: "services-section", routeName: "#services", component: "ServicesSection" })}>
      <div class="container">
        ${SectionTitle({
          eyebrow: "Services",
          title: "Layanan profesional untuk kebutuhan bisnis yang krusial.",
          description: "Setiap layanan dirancang untuk membantu perusahaan bergerak lebih cepat, rapi, dan percaya diri saat menghadapi kebutuhan finansial, tender, pajak, legalitas, dan proteksi.",
        })}
        <div class="services-slider" aria-label="Daftar layanan FUN Consulting">
          <div class="services-track">
            ${sliderServices.map((service, index) => serviceCard(service, index, index >= services.length)).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
