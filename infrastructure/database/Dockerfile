FROM mongo:6.0.5

WORKDIR .
COPY replica.js ./docker-entrypoint-initdb.d/
CMD ["--replSet", "rs0"]
