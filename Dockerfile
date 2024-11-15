FROM node:20

WORKDIR /HOME/APP

COPY . .

RUN npm install

EXPOSE 3004

CMD [ "npm", "run", "start:migrate" ]