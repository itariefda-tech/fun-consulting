import { Button, editMeta, icon } from "./shared.js";

export function BusinessChallenge() {
  const pains = [
    "Laporan keuangan belum tertata",
    "Deadline laporan dan audit",
    "Pajak dan SPT membingungkan",
    "Bank garansi dan surety bond dibutuhkan cepat",
    "Kebutuhan tender mendadak",
    "Legalitas dan izin PPIU/PIHK kompleks",
    "Kekhawatiran pemeriksaan pajak",
  ];

  return `
    <section class="section challenge" id="pain-point" ${editMeta({ id: "pain-point", key: "business-challenge-section", routeName: "#pain-point", component: "BusinessChallenge" })}>
      <div class="container challenge-layout">
        <div class="challenge-copy reveal" ${editMeta({ id: "challenge-copy", key: "business-challenge-copy", routeName: "#pain-point", component: "BusinessChallenge.Copy" })}>
          <span class="eyebrow">Pain Point / Business Challenge</span>
          <h2>Fokus Pada Bisnis Anda, Kami Tangani Sisanya</h2>
          <p class="challenge-lead">Banyak perusahaan kehilangan fokus pertumbuhan bisnis karena tekanan administrasi, perpajakan, legalitas, kebutuhan tender, laporan keuangan, dan proses dokumen yang kompleks.</p>
          <p>FUN Consulting hadir membantu perusahaan menyelesaikan seluruh proses tersebut secara cepat, aman, profesional, dan terarah - sehingga Anda dapat kembali fokus pada pertumbuhan bisnis.</p>
          ${Button({ label: "Diskusikan Masalah Bisnis Anda", href: "#contact" })}
        </div>
        <div class="challenge-grid" ${editMeta({ id: "challenge-grid", key: "business-challenge-grid", routeName: "#pain-point", component: "BusinessChallenge.Grid" })}>
          ${pains.map((pain, index) => `<article class="pain-card glass-card reveal" ${editMeta({ id: `pain-card-${index + 1}`, key: `pain-${pain.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, routeName: "#pain-point", component: "BusinessChallenge.PainCard" })}>${icon("check")}<span>${pain}</span></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}
