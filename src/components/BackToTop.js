import { editMeta, icon } from "./shared.js";

export function BackToTop() {
  return `<a class="back-to-top" href="#home" aria-label="Kembali ke atas" ${editMeta({ id: "back-to-top", key: "back-to-top", routeName: "global", component: "BackToTop" })}>${icon("up")}</a>`;
}
