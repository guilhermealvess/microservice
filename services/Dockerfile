#baixando uma versão do node com linux simplificado
FROM node:10

#criando um diretorio dentro do linux 
RUN mkdir -p /usr/src/app

#setando como diretorio de trabalho
WORKDIR /usr/src/app

#copiando o arquivo package json para o diretorio 
COPY package.json /usr/src/app

#rodando o npm no container 
RUN npm install

#copiando o resto dos arquivos deste diretorio para dentro do diretorio do container 
COPY . /usr/src/app

#abrindo conexão do container para a porta 3000
EXPOSE 3000

#executando no container os seguintes comandos 
CMD ["npm","run", "start"]
