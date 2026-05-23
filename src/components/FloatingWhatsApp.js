import { icon, whatsappAryo } from "./shared.js";

export function FloatingWhatsApp() {
  return `<a class="floating-whatsapp" href="${whatsappAryo}" aria-label="Hubungi WhatsApp">${icon("chat")}<span>WhatsApp</span></a>`;
}
