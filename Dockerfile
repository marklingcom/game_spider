FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

RUN pnpm approve-builds

COPY . .

RUN pnpm run build

CMD ["pnpm", "start"]
