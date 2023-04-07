FROM node:18-alpine AS node-pnpm

RUN npm i -g pnpm

FROM node-pnpm AS tekken-tools-base
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build

CMD ["pnpm", "--filter", "@tekken-tools/frontend", "start"]
