FROM alpine:3.18



WORKDIR /app

RUN apk add --no-cache --update nodejs npm

COPY --chown=node:node . .

RUN npm install
RUN npm run build

RUN npm install prisma-client@latest
COPY prisma/schema.prisma ./prisma/

RUN npx prisma generate

RUN chown -R 1000:1000 /app
USER 1000


EXPOSE 5432

CMD ["npm", "run", "start-linux"]