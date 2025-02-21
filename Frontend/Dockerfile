FROM node:22.14.0-alpine3.20
WORKDIR /app
COPY . .
RUN npm install -g pnpm@10.4.0
RUN pnpm install
EXPOSE 5173
CMD ["pnpm", "run","dev"]