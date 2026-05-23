import { Button, icon, logo, markLogo, whatsappAryo } from "./shared.js";

const serviceCards = ["Laporan Keuangan", "Perpajakan", "Bank Garansi", "Surety Bond", "PPIU & PIHK", "Asuransi Syariah"];
const trustPoints = ["Fast Process", "Professional Team", "Secure Documentation", "Trusted Service", "Full Assistance"];

export function HeroSlider() {
  return `
    <section class="hero" id="home">
      <div class="hero-slide is-active">
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <span class="eyebrow">Professional Business Consulting Partner</span>
            <h1>BOOST YOUR BUSINESS GROWTH</h1>
            <p>Solusi profesional untuk kebutuhan finansial, legalitas, perpajakan, dan pengembangan bisnis perusahaan Anda.</p>
            <div class="hero-actions">
              ${Button({ label: "Konsultasi Sekarang", href: whatsappAryo })}
              ${Button({ label: "Hubungi Kami", href: "#contact", variant: "secondary" })}
            </div>
            <div class="hero-badge">${icon("shield")} Secure documentation. Full assistance.</div>
          </div>
          <div class="hero-visual hero-visual--city reveal">
            <div class="visual-logo"><img src="${logo}" alt="FUN Consulting" /></div>
            <div class="finance-card card-a"><b>Financial Report</b><span>Audited ready</span></div>
            <div class="finance-card card-b"><b>Tax Advisory</b><span>SPT & PPh</span></div>
            <div class="finance-card card-c"><b>Bank Guarantee</b><span>Fast process</span></div>
            <div class="city-lines"></div>
          </div>
        </div>
      </div>
      <div class="hero-slide">
        <div class="container hero-grid hero-grid--center">
          <div class="hero-copy reveal">
            <span class="eyebrow">Integrated Service Ecosystem</span>
            <h2>Solusi bisnis terhubung dalam satu pendampingan profesional.</h2>
            <p>Dari laporan keuangan, perpajakan, tender, legalitas, sampai proteksi perusahaan, semua proses diarahkan dengan alur yang jelas.</p>
            <div class="hero-actions">
              ${Button({ label: "Lihat Layanan", href: "#services" })}
              ${Button({ label: "Diskusi Kebutuhan", href: whatsappAryo, variant: "secondary" })}
            </div>
          </div>
          <div class="ecosystem reveal">
            <div class="orbit-ring"></div>
            <div class="ecosystem-hub"><img src="${markLogo}" alt="FUN Consulting" /><span>FUN Consulting</span></div>
            ${serviceCards.map((item, index) => `<div class="orbit-card orbit-card-${index + 1}">${icon(index % 2 ? "tax" : "file")}<span>${item}</span></div>`).join("")}
          </div>
        </div>
      </div>
      <div class="hero-slide">
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <span class="eyebrow">Trust & Credibility</span>
            <h2>Ketenangan bisnis dimulai dari proses yang aman dan terarah.</h2>
            <p>Tim profesional FUN Consulting membantu menyiapkan dokumen penting perusahaan dengan komunikasi transparan dan pendampingan penuh.</p>
            <div class="trust-list">
              ${trustPoints.map((item) => `<span>${icon("check")}${item}</span>`).join("")}
            </div>
          </div>
          <div class="hero-visual hero-visual--dashboard reveal">
            <div class="gold-badge">Trusted Partner</div>
            <div class="dashboard-panel">
              <span>Documentation Status</span>
              <div class="status-row"><b>Financial Report</b><i>Ready</i></div>
              <div class="status-row"><b>Tax File</b><i>Reviewed</i></div>
              <div class="status-row"><b>Tender Support</b><i>Assisted</i></div>
            </div>
            <div class="document-stack"></div>
          </div>
        </div>
      </div>
      <div class="hero-controls" aria-label="Hero slide navigation">
        <button class="hero-dot is-active" type="button" aria-label="Slide 1"></button>
        <button class="hero-dot" type="button" aria-label="Slide 2"></button>
        <button class="hero-dot" type="button" aria-label="Slide 3"></button>
      </div>
    </section>
  `;
}
