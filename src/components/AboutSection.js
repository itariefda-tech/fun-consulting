import { SectionTitle, icon, logo } from "./shared.js";

export function AboutSection() {
  return `
    <section class="section about" id="about">
      <div class="container about-grid">
        <div class="about-visual reveal">
          <div class="office-visual">
            <img src="${logo}" alt="FUN Consulting" />
            <div class="visual-metric"><b>Full Assistance</b><span>From consultation to completion</span></div>
            <div class="visual-metric visual-metric--right"><b>Secure Process</b><span>Confidential documentation</span></div>
          </div>
        </div>
        <div class="about-copy">
          ${SectionTitle({
            eyebrow: "About FUN Consulting",
            title: "Partner strategis untuk finansial, legalitas, dan kebutuhan bisnis modern.",
            description: "FUN Consulting membantu perusahaan mengelola proses administratif yang penting dengan pendekatan profesional, human, dan solution-oriented.",
            align: "left",
          })}
          <div class="about-values reveal">
            <div>${icon("shield")}<span>Aman, rahasia, dan terstruktur.</span></div>
            <div>${icon("users")}<span>Didampingi tim profesional.</span></div>
            <div>${icon("chat")}<span>Komunikasi jelas dari konsultasi hingga selesai.</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}
