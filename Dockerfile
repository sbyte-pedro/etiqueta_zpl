# ─── shared: workspace-aware dependency install ───────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/
RUN npm ci

# ─── build: frontend (vite) ───────────────────────────────────────────────────
FROM deps AS frontend-builder
COPY frontend/ ./frontend/
RUN npm run build --workspace=frontend

# ─── build: backend (tsc) ─────────────────────────────────────────────────────
FROM deps AS backend-builder
COPY backend/ ./backend/
RUN npm run build --workspace=backend

# ─── production ───────────────────────────────────────────────────────────────
FROM node:20-alpine AS production
WORKDIR /app
COPY package.json package-lock.json ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/
COPY --from=deps /app/node_modules ./node_modules
RUN npm prune --omit=dev
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=frontend-builder /app/frontend/dist ./backend/dist/public
COPY backend/drizzle ./backend/drizzle
WORKDIR /app/backend
ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "dist/index.js"]

# ─── dev: backend (source mounted by compose) ─────────────────────────────────
FROM node:20-alpine AS backend-dev
WORKDIR /app

# ─── dev: frontend (source mounted by compose) ────────────────────────────────
FROM node:20-alpine AS frontend-dev
WORKDIR /app
