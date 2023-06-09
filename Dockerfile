FROM node:18.16.0-alpine AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]