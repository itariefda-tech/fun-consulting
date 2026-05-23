import { SectionTitle, icon } from "./shared.js";

export function WhyChooseUs() {
  const benefits = [
    ["Proses Cepat", "Kebutuhan mendesak ditangani dengan alur yang ringkas dan prioritas jelas.", "speed"],
    ["Aman & Rahasia", "Dokumen perusahaan dijaga dengan standar kerahasiaan profesional.", "shield"],
    ["Profesional", "Pendekatan kerja rapi, komunikatif, dan fokus pada penyelesaian.", "users"],
    ["Pendampingan Penuh", "Tim mendampingi proses sejak konsultasi hingga dokumen selesai.", "chat"],
    ["Komunikasi Transparan", "Update mudah dipahami sehingga keputusan bisnis lebih tenang.", "check"],
  ];

  return `
    <section class="section why" id="why">
      <div class="container why-grid">
        <div>
          ${SectionTitle({
            eyebrow: "Why Choose Us",
            title: "Kredibilitas yang terasa dari cara kami bekerja.",
            description: "FUN Consulting menggabungkan kecepatan, keamanan, dan pendampingan manusiawi untuk membantu perusahaan melewati proses penting tanpa kehilangan fokus bisnis.",
            align: "left",
          })}
        </div>
        <div class="benefit-grid">
          ${benefits.map(([title, text, iconName]) => `
            <article class="benefit-card glass-card reveal">
              ${icon(iconName)}
              <div>
                <h3>${title}</h3>
                <p>${text}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
