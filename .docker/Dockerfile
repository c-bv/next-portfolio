FROM node:20-alpine as build

WORKDIR '/app'
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm install --loglevel verbose

RUN npm run build


FROM nginx:1.17.8-alpine

COPY --from=build /app/public /usr/share/nginx/html/public
COPY --from=build /app/.next/standalone /usr/share/nginx/html/.next/standalone
COPY --from=build /app/.next/static /usr/share/nginx/html/.next/static


RUN rm /etc/nginx/conf.d/default.conf
COPY .nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]