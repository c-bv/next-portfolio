FROM node:20-alpine as build

WORKDIR '/app'
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm install --loglevel verbose

RUN npm run build


FROM nginx:1.17.8-alpine

COPY --from=build /app/.next /usr/share/nginx/html


RUN rm /etc/nginx/conf.d/default.conf
COPY .nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]