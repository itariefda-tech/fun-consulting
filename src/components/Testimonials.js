import { SectionTitle, editMeta } from "./shared.js";

export function Testimonials() {
  const testimonials = [
    ["Rizky Pratama", "Direktur Operasional", "Proses bank garansi kami dibantu dengan cepat dan komunikasinya jelas. Tim FUN Consulting membuat kebutuhan tender terasa jauh lebih terkendali."],
    ["Nadia Putri", "Finance Manager", "Laporan dan kebutuhan pajak perusahaan kami menjadi lebih rapi. Pendampingannya profesional tanpa membuat proses terasa rumit."],
    ["H. Fadli Rahman", "Owner Travel", "Pengurusan dokumen PPIU membutuhkan ketelitian tinggi. FUN Consulting membantu kami memahami tahapan dan menyiapkan dokumen dengan tenang."],
  ];

  return `
    <section class="section testimonials" id="testimonials" ${editMeta({ id: "testimonials", key: "testimonials-section", routeName: "#testimonials", component: "Testimonials" })}>
      <div class="container">
        ${SectionTitle({
          eyebrow: "Testimonials",
          title: "Kepercayaan lahir dari proses yang jelas.",
          description: "Cerita singkat dari client yang membutuhkan pendampingan profesional untuk dokumen dan kebutuhan bisnis penting.",
        })}
        <div class="testimonial-grid">
          ${testimonials.map(([name, role, quote]) => `
            <article class="testimonial-card glass-card reveal" ${editMeta({ id: `testimonial-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, key: `testimonial-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, routeName: "#testimonials", component: "Testimonials.Card" })}>
              <span class="quote-mark">"</span>
              <p>${quote}</p>
              <div>
                <b>${name}</b>
                <small>${role}</small>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
