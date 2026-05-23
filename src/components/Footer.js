import { icon, logo, whatsappAryo, whatsappArief } from "./shared.js";

export function Footer() {
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="${logo}" alt="FUN Consulting" />
          <p>Professional Business Consulting Partner untuk finansial, perpajakan, legalitas, tender, dan kebutuhan bisnis modern.</p>
        </div>
        <div>
          <h3>Layanan</h3>
          <a href="#services">Laporan Keuangan</a>
          <a href="#services">Perpajakan</a>
          <a href="#services">Bank Garansi</a>
          <a href="#services">Surety Bond</a>
          <a href="#services">PPIU & PIHK</a>
        </div>
        <div>
          <h3>Navigasi</h3>
          <a href="#about">Tentang Kami</a>
          <a href="#workflow">Workflow</a>
          <a href="#why">Keunggulan</a>
          <a href="#testimonials">Testimoni</a>
          <a href="#contact">Kontak</a>
        </div>
        <div>
          <h3>Kontak</h3>
          <a href="${whatsappAryo}">${icon("chat")} 0812-8574-5854 Aryo</a>
          <a href="${whatsappArief}">${icon("chat")} 0811-8080-700 Arief</a>
          <p>Jl. Margonda No. 477, Pondok Cina, Beji, Depok</p>
          <p>Instagram: @funconsulting</p>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 FUN Consulting. All rights reserved.</span>
        <span>Modern Professional Business Consulting Partner</span>
      </div>
    </footer>
  `;
}
