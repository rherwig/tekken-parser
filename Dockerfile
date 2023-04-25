FROM node:18-alpine AS node-pnpm

RUN npm i -g pnpm

FROM node-pnpm AS tekken-tools-base

ARG GITHUB_OAUTH_CLIENT_ID
ENV GITHUB_OAUTH_CLIENT_ID ${GITHUB_OAUTH_CLIENT_ID}

ARG GITHUB_OAUTH_CLIENT_SECRET
ENV GITHUB_OAUTH_CLIENT_SECRET ${GITHUB_OAUTH_CLIENT_SECRET}

WORKDIR /app
COPY . .

RUN pnpm install
RUN pnpm build

CMD ["pnpm", "--filter", "@tekken-space/frontend", "start"]
