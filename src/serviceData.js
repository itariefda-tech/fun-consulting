export const SERVICE_STORAGE_KEY = "fun-consulting-services";
export const OWNER_PASSWORD = "owner0180";
const SERVICES_API_PATH = "/api/services";

export const serviceIconOptions = [
  ["file", "Laporan"],
  ["tax", "Pajak"],
  ["bank", "Bank"],
  ["bond", "Jaminan"],
  ["travel", "Travel"],
  ["shield", "Proteksi"],
  ["speed", "Cepat"],
  ["users", "Tim"],
  ["chat", "Konsultasi"],
];

export const fallbackServices = [
  {
    title: "Pembuatan Laporan Keuangan",
    text: "Membantu penerbitan laporan keuangan sesuai kebutuhan perusahaan, termasuk laporan audited dari Kantor Akuntan Publik terdaftar.",
    iconName: "file",
  },
  {
    title: "Perpajakan",
    text: "Membantu SPT Masa, SPT Tahunan, PPh Badan, PPh Orang Pribadi, serta pendampingan pemeriksaan pajak.",
    iconName: "tax",
  },
  {
    title: "Bank Garansi",
    text: "Membantu penerbitan bank garansi melalui Bank BUMN maupun bank swasta nasional, dengan proses cepat dan profesional.",
    iconName: "bank",
  },
  {
    title: "Surety Bond",
    text: "Membantu penerbitan jaminan penawaran, pelaksanaan, uang muka, pemeliharaan, pembayaran, dan fidelity bond.",
    iconName: "bond",
  },
  {
    title: "PPIU & PIHK",
    text: "Membantu pengurusan izin, pemeriksaan dokumen, pendampingan, akreditasi, sertifikasi, dan perpanjangan izin.",
    iconName: "travel",
  },
  {
    title: "Asuransi Syariah",
    text: "Melayani asuransi perjalanan, asuransi kesehatan dan jiwa karyawan, serta asuransi harta benda perusahaan.",
    iconName: "shield",
  },
];

let serviceCache = fallbackServices;

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeService(service) {
  return {
    title: String(service?.title ?? "").trim(),
    text: String(service?.text ?? "").trim(),
    iconName: String(service?.iconName ?? "file").trim() || "file",
  };
}

export function normalizeServices(services) {
  if (!Array.isArray(services)) return fallbackServices;

  const normalized = services
    .map(normalizeService)
    .filter((service) => service.title && service.text);

  return normalized.length ? normalized : fallbackServices;
}

export function getServices() {
  return serviceCache;
}

function getLocalServices() {
  try {
    const stored = localStorage.getItem(SERVICE_STORAGE_KEY);
    if (!stored) return fallbackServices;
    return normalizeServices(JSON.parse(stored));
  } catch {
    return fallbackServices;
  }
}

export async function loadServices() {
  try {
    const response = await fetch(SERVICES_API_PATH, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Services API is unavailable.");

    const data = await response.json();
    serviceCache = normalizeServices(data.services);
    localStorage.setItem(SERVICE_STORAGE_KEY, JSON.stringify(serviceCache));
  } catch {
    serviceCache = getLocalServices();
  }

  return serviceCache;
}

export async function saveServices(services) {
  const normalized = normalizeServices(services);
  const response = await fetch(SERVICES_API_PATH, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Owner-Password": OWNER_PASSWORD,
    },
    body: JSON.stringify({ services: normalized }),
  });

  if (!response.ok) throw new Error("Gagal menyimpan layanan ke server.");

  const data = await response.json();
  serviceCache = normalizeServices(data.services);
  localStorage.setItem(SERVICE_STORAGE_KEY, JSON.stringify(serviceCache));
  return serviceCache;
}

export async function resetServices() {
  const response = await fetch(SERVICES_API_PATH, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "X-Owner-Password": OWNER_PASSWORD,
    },
  });

  if (!response.ok) throw new Error("Gagal mereset layanan di server.");

  const data = await response.json();
  serviceCache = normalizeServices(data.services);
  localStorage.removeItem(SERVICE_STORAGE_KEY);
  return serviceCache;
}
