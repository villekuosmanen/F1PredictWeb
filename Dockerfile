FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

WORKDIR client
RUN npm install
RUN npm run build
WORKDIR ..
EXPOSE 1337
CMD [ "npm", "start" ]