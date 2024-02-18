FROM alpine:3.18

WORKDIR /app

RUN apk add --no-cache --update nodejs npm

COPY . .
RUN npm install --silent

RUN npm run build

RUN chown -R 1000:1000 /app/node_modules/@prisma /app/node_modules/.prisma
RUN npm install prisma-client@latest
USER 1000

COPY prisma/schema.prisma ./prisma/

RUN npx prisma generate

#RUN chown -R 1000:1000 /app/node_modules/@prisma /app/node_modules/.prism
EXPOSE 5432

CMD ["npm", "run", "start-linux"]