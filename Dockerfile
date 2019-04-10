FROM node:alpine as builder

WORKDIR /src

COPY package*.json /src/
RUN npm install --silent

COPY . /src
RUN npm run build

FROM nginx:alpine
COPY --from=builder /src/build /usr/src/app/build/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
