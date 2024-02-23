FROM alpine:latest

COPY ./scripts /scripts

RUN apk add --no-cache miniserve git && \
    adduser www-data -G www-data -D -h /www -s /sbin/nologin

USER www-data
WORKDIR /www

ENTRYPOINT [ "/bin/ash", "/scripts/entrypoint.sh" ]
