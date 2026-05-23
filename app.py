from __future__ import annotations

import argparse
import http.server
import socketserver
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent


class StaticHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run FUN Consulting landing page locally.")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind. Default: 127.0.0.1")
    parser.add_argument("--port", type=int, default=4173, help="Port to use. Default: 4173")
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    with socketserver.TCPServer((args.host, args.port), StaticHandler) as server:
        print(f"FUN Consulting landing page running at http://{args.host}:{args.port}")
        print("Press Ctrl+C to stop.")
        server.serve_forever()


if __name__ == "__main__":
    main()
