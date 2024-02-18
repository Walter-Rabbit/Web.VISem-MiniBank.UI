FROM alpine:3.18

# RUN addgroup -g 1000 node && \
#     adduser -u 1000 -G node

WORKDIR /app

RUN apk add --no-cache --update nodejs npm
#RUN apk update && apk add --root /app --no-cache nodejs npm

COPY --chown=node:node . .

RUN npm install
RUN npm run build

#RUN chown -R 1000:1000 /.npm
#RUN chown -R node:node /app
#USER node

RUN npm install prisma-client@latest
COPY prisma/schema.prisma ./prisma/

RUN npx prisma generate

RUN chown -R 1000:1000 /app
USER 1000


EXPOSE 5432

CMD ["npm", "run", "start-linux"]