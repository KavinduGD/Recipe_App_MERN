FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm  run build

# FROM node:22-alpine 

# WORKDIR /app

# COPY --from=build /app/build /app/build

# CMD ["npx" ,"http-server", "build"]

FROM nginx:1.27.0

COPY --from=build /app/dist /usr/share/nginx/html