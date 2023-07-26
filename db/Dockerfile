FROM alpine:latest

RUN apk update && \
    apk add sqlite

VOLUME /data

CMD ["sh", "-c", "tail -f /dev/null"]