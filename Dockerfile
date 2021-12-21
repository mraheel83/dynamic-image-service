FROM alpine

LABEL maintainer="mraheel83@gmail.com"

RUN apk add --update nodejs npm

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 8000

ENTRYPOINT [ "node", "./index.js" ]