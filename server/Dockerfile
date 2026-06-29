FROM node:22-alpine AS deps
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/server/node_modules ./server/node_modules
COPY . .
WORKDIR /app/server
RUN npm run prisma:generate
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app
WORKDIR /app/server
EXPOSE 3000
CMD ["sh", "-c", "npm run prisma:migrate && npm start"]
