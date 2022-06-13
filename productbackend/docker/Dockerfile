FROM node:14
WORKDIR /app
COPY ./app /
COPY ./app/tsconfig.json .
COPY ./app/nodemon.json .

COPY ./scripts /scripts
RUN chmod +x /scripts/*
EXPOSE 8000
ENTRYPOINT ["/scripts/entrypoint.sh"]