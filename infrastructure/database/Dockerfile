FROM mongo:4.4.6

WORKDIR .
COPY replica.js ./docker-entrypoint-initdb.d/
CMD ["-replSet", "rs0"]
