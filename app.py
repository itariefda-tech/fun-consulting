from __future__ import annotations

import argparse
import http.server
import subprocess
import socketserver
import threading
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent
DIST_DIR = ROOT_DIR / "dist"


class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True


class StaticHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        serve_dir = DIST_DIR if DIST_DIR.exists() else ROOT_DIR
        super().__init__(*args, directory=str(serve_dir), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run FUN Consulting landing page locally.")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind. Default: 127.0.0.1")
    parser.add_argument("--port", type=int, default=4173, help="Port to use. Default: 4173")
    parser.add_argument("--no-open", action="store_true", help="Do not open Microsoft Edge automatically.")
    return parser.parse_args()


def open_edge(url: str) -> None:
    try:
        subprocess.Popen(
            ["cmd", "/c", "start", "", "msedge", url],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    except OSError:
        subprocess.Popen(
            ["cmd", "/c", "start", "", url],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )


def main() -> None:
    args = parse_args()
    url = f"http://{args.host}:{args.port}"
    serve_dir = DIST_DIR if DIST_DIR.exists() else ROOT_DIR

    with ThreadingTCPServer((args.host, args.port), StaticHandler) as server:
        print(f"FUN Consulting landing page running at {url}")
        print(f"Serving files from {serve_dir}")
        print("Press Ctrl+C to stop.")
        if not args.no_open:
            threading.Timer(0.3, open_edge, args=(url,)).start()
        server.serve_forever()


if __name__ == "__main__":
    main()
