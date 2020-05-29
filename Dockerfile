FROM node:12.17.0-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine as prod-stage
COPY --from=build-stage /app/dist/practiceNgrx /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
