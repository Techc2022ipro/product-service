FROM node:14
WORKDIR /app
COPY ./app /
COPY ./app/src/package.* /
COPY . .
COPY ./scripts/ /scripts
RUN chmod +x /scripts/*
EXPOSE 8080
ENTRYPOINT ["/scripts/entrypoint.sh"] 