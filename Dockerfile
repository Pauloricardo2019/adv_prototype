FROM node:alpine

WORKDIR C:\projeto_advocacia

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]