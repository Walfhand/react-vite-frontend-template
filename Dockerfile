# Build

FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# Run

FROM node:24-alpine

WORKDIR /app

RUN npm i -g serve@14.2.8

COPY --from=build /app/dist ./dist
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh



EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
CMD ["serve", "-s", "dist", "-l", "3000"]
