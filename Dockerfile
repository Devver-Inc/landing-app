# Stage 1: Build
FROM node:24.21.0-alpine AS builder

WORKDIR /app

# Enable pnpm via corepack (version pinned by "packageManager" in package.json)
RUN corepack enable

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies (pnpm store cached across builds)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir /pnpm/store

# Copy source code
COPY . .

# PUBLIC_ variables are inlined into the static output by astro build
ARG PUBLIC_WAITLIST_ENDPOINT
ENV PUBLIC_WAITLIST_ENDPOINT=$PUBLIC_WAITLIST_ENDPOINT

RUN pnpm build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
