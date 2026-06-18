import { editMeta, icon, whatsappAryo } from "./shared.js";

export function FloatingWhatsApp() {
  return `<a class="floating-whatsapp" href="${whatsappAryo}" aria-label="Hubungi WhatsApp" ${editMeta({ id: "floating-whatsapp", key: "floating-whatsapp", routeName: "global", component: "FloatingWhatsApp" })}>${icon("chat")}<span>WhatsApp</span></a>`;
}
