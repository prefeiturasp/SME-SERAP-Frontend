FROM node:8.11.1 as builder
WORKDIR /app
COPY . ./
RUN yarn install 
RUN yarn build

FROM nginx:alpine
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/app/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
