#!/bin/bash
set -e

APP_NAME="funconsulting-app"
IMAGE_NAME="funconsulting-app"
APP_DIR="/opt/apps/fun-consulting"
NETWORK_NAME="hosting_web"

cd "$APP_DIR"

echo "==> Sync repository"
git fetch origin
git reset --hard origin/main
git clean -fd

echo "==> Stop container lama"
docker rm -f "$APP_NAME" 2>/dev/null || true

echo "==> Build image terbaru"
docker build --no-cache -t "$IMAGE_NAME" .

echo "==> Jalankan container"
docker run -d \
  --name "$APP_NAME" \
  --restart unless-stopped \
  --network "$NETWORK_NAME" \
  -p 3000:3000 \
  "$IMAGE_NAME"

echo "==> Cleanup docker"
docker image prune -f

echo "==> Test app"
docker exec "$APP_NAME" wget -qO- http://127.0.0.1:3000 >/dev/null

echo ""
echo "DEPLOY SUCCESS"
echo "https://funconsulting.my.id"
