FROM node:24-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY ./src ./src
COPY .env.example .env
EXPOSE 3000
CMD ["node", "src/Server.js"]
