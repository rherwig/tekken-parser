FROM node:18 AS node-pnpm

RUN npm i -g pnpm

FROM node-pnpm AS hrwg-base
WORKDIR /app
COPY . .
COPY .env.dist .env
RUN pnpm install

FROM hrwg-base AS hrwg-website
WORKDIR /app
RUN pnpm --filter @hrwg/website build

CMD ["pnpm", "--filter", "@hrwg/website", "start"]
