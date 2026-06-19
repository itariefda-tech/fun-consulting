import { createReadStream, existsSync, mkdirSync, readFileSync, renameSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { OWNER_PASSWORD, fallbackServices, normalizeServices } from "../src/serviceData.js";

const args = process.argv.slice(2);
const portIndex = args.indexOf("--port");
const hostIndex = args.indexOf("--host");
const rootDir = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distDir = join(rootDir, "dist");
const dataDir = process.env.DATA_DIR ? resolve(process.env.DATA_DIR) : join(rootDir, "data");
const servicesFile = join(dataDir, "services.json");
const host = hostIndex >= 0 && args[hostIndex + 1] ? args[hostIndex + 1] : "0.0.0.0";
const port = Number(portIndex >= 0 && args[portIndex + 1] ? args[portIndex + 1] : process.env.PORT || "3000");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

function readServices() {
  try {
    if (!existsSync(servicesFile)) return fallbackServices;
    const payload = JSON.parse(readFileSync(servicesFile, "utf8"));
    return normalizeServices(Array.isArray(payload) ? payload : payload.services);
  } catch {
    return fallbackServices;
  }
}

function writeServices(services) {
  mkdirSync(dataDir, { recursive: true });
  const normalized = normalizeServices(services);
  const tempFile = `${servicesFile}.tmp`;
  writeFileSync(tempFile, `${JSON.stringify({ services: normalized }, null, 2)}\n`, "utf8");
  renameSync(tempFile, servicesFile);
  return normalized;
}

function resetServices() {
  try {
    if (existsSync(servicesFile)) unlinkSync(servicesFile);
  } catch {
    return writeServices(fallbackServices);
  }

  return fallbackServices;
}

function readRequestJson(request) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 64_000) {
        request.destroy();
        rejectBody(new Error("Request terlalu besar."));
      }
    });

    request.on("end", () => {
      try {
        resolveBody(body ? JSON.parse(body) : {});
      } catch {
        rejectBody(new Error("JSON tidak valid."));
      }
    });

    request.on("error", rejectBody);
  });
}

function ownerAuthorized(request) {
  return request.headers["x-owner-password"] === OWNER_PASSWORD;
}

async function handleServicesApi(request, response) {
  if (request.method === "GET") {
    sendJson(response, 200, { services: readServices() });
    return;
  }

  if (!ownerAuthorized(request)) {
    sendJson(response, 401, { error: "Unauthorized" });
    return;
  }

  if (request.method === "PUT") {
    try {
      const payload = await readRequestJson(request);
      sendJson(response, 200, { services: writeServices(payload.services) });
    } catch (error) {
      sendJson(response, 400, { error: error.message });
    }
    return;
  }

  if (request.method === "DELETE") {
    sendJson(response, 200, { services: resetServices() });
    return;
  }

  sendJson(response, 405, { error: "Method not allowed" });
}

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
  const filePath = normalize(join(distDir, relativePath));

  if (!filePath.startsWith(distDir)) return null;
  if (existsSync(filePath) && statSync(filePath).isFile()) return filePath;
  return join(distDir, "index.html");
}

function serveStatic(request, response) {
  const filePath = resolveRequestPath(request.url ?? "/");

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}

if (!existsSync(join(distDir, "index.html"))) {
  console.error("Folder dist belum siap. Jalankan `npm run build` dulu.");
  process.exit(1);
}

createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://${host}:${port}`);

  if (url.pathname === "/api/services") {
    handleServicesApi(request, response);
    return;
  }

  serveStatic(request, response);
}).listen(port, host, () => {
  console.log(`FUN Consulting running at http://${host}:${port}/`);
  console.log(`Serving built files from ${distDir}`);
  console.log(`Persisting services in ${servicesFile}`);
});
