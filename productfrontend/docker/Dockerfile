FROM node:14
WORKDIR /app
COPY ./app /
COPY ./app/src/package.* /
COPY ./scripts/ /scripts
RUN chmod +x /scripts/*
EXPOSE 2020
ENTRYPOINT [ "/scripts/entrypoint.sh" ]