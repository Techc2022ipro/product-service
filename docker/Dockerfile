FROM node:14
WORKDIR /app
COPY ../app . 
COPY ./scripts /scripts
RUN chmod +x /scripts/*
EXPOSE 8000
EXPOSE 2432
ENTRYPOINT ["/scripts/entrypoint.sh"]