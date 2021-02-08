FROM node:8.11.1 as builder
RUN mkdir -p /opt/services/front/src
RUN mkdir -p /usr/share/nginx/html
WORKDIR /opt/services/front/src
COPY . /opt/services/front/src
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
COPY --from=builder /opt/services/front/src/build /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/app/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]