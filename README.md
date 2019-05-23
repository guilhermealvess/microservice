# microservice

Trabalho #1 da disciplina de Arquitetura de Software Aplicada

# Install Docker imagem Postgres

docker pull postgres
docker run --name asa -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres

# Executar Docker do banco de dados

docker run asa
