FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm@9.15.0

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --production

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]
