FROM node:18-alpine3.16

WORKDIR /app

COPY . .
RUN npm install --silent

RUN npm run build

RUN apk add --no-cache postgresql-libs postgresql-dev gcc make
RUN npm install prisma-client@latest

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

EXPOSE 5432

CMD ["npm", "run", "start-linux"]