import { SectionTitle, editMeta, icon } from "./shared.js";

export function WorkflowTimeline() {
  const steps = [
    ["01", "Konsultasi", "Kami memahami kebutuhan, deadline, dan kondisi dokumen perusahaan Anda.", "chat"],
    ["02", "Analisa Kebutuhan", "Tim menilai kelengkapan, risiko, dan jalur proses yang paling tepat.", "file"],
    ["03", "Proses Dokumen", "Dokumen diproses secara terarah dengan update yang mudah dipantau.", "speed"],
    ["04", "Approval & Penyelesaian", "Hasil akhir diserahkan dengan pendampingan sampai kebutuhan selesai.", "check"],
  ];

  return `
    <section class="section workflow" id="workflow" ${editMeta({ id: "workflow", key: "workflow-section", routeName: "#workflow", component: "WorkflowTimeline" })}>
      <div class="container">
        ${SectionTitle({
          eyebrow: "How We Work",
          title: "Proses kerja jelas, terarah, dan mudah diikuti.",
          description: "Kami menjaga setiap tahap tetap transparan agar perusahaan merasa aman sejak konsultasi pertama hingga penyelesaian.",
        })}
        <div class="timeline reveal">
          ${steps.map(([number, title, text, iconName]) => `
            <article class="timeline-card" ${editMeta({ id: `workflow-step-${number}`, key: `workflow-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, routeName: "#workflow", component: "WorkflowTimeline.Step" })}>
              <span>${number}</span>
              <div class="timeline-icon">${icon(iconName)}</div>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
