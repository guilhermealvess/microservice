FROM node

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

#instalando especificamente o angular js 
RUN npm install -g @angular/cli
RUN npm install

COPY . /app/

EXPOSE 4200

CMD ["npm", "start"]