import { Button, SectionTitle, icon, whatsappAryo } from "./shared.js";

export function ServicesSection() {
  const services = [
    ["Pembuatan Laporan Keuangan", "Membantu penerbitan laporan keuangan sesuai kebutuhan perusahaan, termasuk laporan audited dari Kantor Akuntan Publik terdaftar.", "file"],
    ["Perpajakan", "Membantu SPT Masa, SPT Tahunan, PPh Badan, PPh Orang Pribadi, serta pendampingan pemeriksaan pajak.", "tax"],
    ["Bank Garansi", "Membantu penerbitan bank garansi melalui Bank BUMN maupun bank swasta nasional, dengan proses cepat dan profesional.", "bank"],
    ["Surety Bond", "Membantu penerbitan jaminan penawaran, pelaksanaan, uang muka, pemeliharaan, pembayaran, dan fidelity bond.", "bond"],
    ["PPIU & PIHK", "Membantu pengurusan izin, pemeriksaan dokumen, pendampingan, akreditasi, sertifikasi, dan perpanjangan izin.", "travel"],
    ["Asuransi Syariah", "Melayani asuransi perjalanan, asuransi kesehatan dan jiwa karyawan, serta asuransi harta benda perusahaan.", "shield"],
  ];

  return `
    <section class="section services" id="services">
      <div class="container">
        ${SectionTitle({
          eyebrow: "Services",
          title: "Layanan profesional untuk kebutuhan bisnis yang krusial.",
          description: "Setiap layanan dirancang untuk membantu perusahaan bergerak lebih cepat, rapi, dan percaya diri saat menghadapi kebutuhan finansial, tender, pajak, legalitas, dan proteksi.",
        })}
        <div class="services-grid">
          ${services.map(([title, text, iconName]) => `
            <article class="service-card glass-card reveal">
              <div class="service-icon">${icon(iconName)}</div>
              <h3>${title}</h3>
              <p>${text}</p>
              <a href="${whatsappAryo}">Konsultasikan ${icon("arrow")}</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
