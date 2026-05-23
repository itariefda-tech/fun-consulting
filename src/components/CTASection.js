import { Button, icon, whatsappAryo, whatsappArief } from "./shared.js";

export function CTASection() {
  return `
    <section class="section cta-section" id="contact">
      <div class="container">
        <div class="cta-banner reveal">
          <span class="eyebrow">Ready To Consult</span>
          <h2>Konsultasikan Kebutuhan Bisnis Anda Sekarang</h2>
          <p>Diskusikan kebutuhan laporan keuangan, perpajakan, bank garansi, surety bond, PPIU & PIHK, atau asuransi perusahaan bersama tim profesional FUN Consulting.</p>
          <div class="hero-actions">
            ${Button({ label: "Hubungi WhatsApp", href: whatsappAryo })}
            ${Button({ label: "Jadwalkan Konsultasi", href: whatsappArief, variant: "secondary" })}
          </div>
          <div class="contact-strip">
            <span>${icon("chat")} 0812-8574-5854 Aryo</span>
            <span>${icon("chat")} 0811-8080-700 Arief</span>
            <span>${icon("check")} @funconsulting</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
