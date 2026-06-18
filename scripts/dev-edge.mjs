import { spawn } from "node:child_process";
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const noOpen = args.includes("--no-open");
const noBuild = args.includes("--no-build");
const portIndex = args.indexOf("--port");
const host = "127.0.0.1";
const port = Number(portIndex >= 0 && args[portIndex + 1] ? args[portIndex + 1] : "5173");
const rootDir = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distDir = join(rootDir, "dist");
const viteBin = join(rootDir, "node_modules", "vite", "bin", "vite.js");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function runBuild() {
  if (noBuild) return Promise.resolve();
  if (!existsSync(viteBin)) {
    console.error("Vite belum terinstall. Jalankan `npm install` dulu.");
    process.exit(1);
  }

  return new Promise((resolveBuild, rejectBuild) => {
    const build = spawn(process.execPath, [viteBin, "build"], {
      cwd: rootDir,
      stdio: "inherit",
    });

    build.on("exit", (code) => {
      if (code === 0) {
        resolveBuild();
        return;
      }
      rejectBuild(new Error(`Vite build gagal dengan exit code ${code ?? "unknown"}.`));
    });
  });
}

function openEdge(url) {
  if (noOpen) return;

  if (process.platform === "win32") {
    const edge = spawn("cmd", ["/c", "start", "", "msedge", url], {
      detached: true,
      stdio: "ignore",
    });
    edge.on("error", () => {
      spawn("cmd", ["/c", "start", "", url], {
        detached: true,
        stdio: "ignore",
      }).unref();
    });
    edge.unref();
    return;
  }

  const opener = process.platform === "darwin" ? "open" : "xdg-open";
  spawn(opener, [url], { detached: true, stdio: "ignore" }).unref();
}

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
  const filePath = normalize(join(distDir, relativePath));

  if (!filePath.startsWith(distDir)) {
    return null;
  }

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    return filePath;
  }

  return join(distDir, "index.html");
}

function startServer() {
  if (!existsSync(join(distDir, "index.html"))) {
    console.error("Folder dist belum siap. Jalankan `npm run build` dulu.");
    process.exit(1);
  }

  const server = createServer((request, response) => {
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
  });

  server.listen(port, host, () => {
    const url = `http://${host}:${port}/`;
    console.log(`FUN Consulting running at ${url}`);
    console.log(`Serving built files from ${distDir}`);
    console.log("Press Ctrl+C to stop.");
    openEdge(url);
  });
}

runBuild()
  .then(startServer)
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
