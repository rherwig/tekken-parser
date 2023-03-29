FROM node:18 AS node-pnpm

RUN npm i -g pnpm

FROM node-pnpm AS tekken-tools-base
WORKDIR /app
COPY . .
COPY .env.dist .env
RUN pnpm install

FROM tekken-tools-base AS tekken-tools-app
WORKDIR /app
RUN pnpm --filter @tekken-tools/app build

CMD ["pnpm", "--filter", "@tekken-tools/app", "start"]
