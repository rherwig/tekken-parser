FROM node:18-alpine AS node-pnpm

RUN npm i -g pnpm

FROM node-pnpm AS tekken-tools-base
WORKDIR /app
COPY . .
RUN pnpm install

FROM tekken-tools-base AS tekken-tools-app
WORKDIR /app
RUN pnpm --filter @tekken-tools/frontend build

CMD ["pnpm", "--filter", "@tekken-tools/frontend", "start"]
