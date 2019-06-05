# Microservice-asa

Trabalho da disciplina de Arquitetura de Software Aplicada (Microsserviço + ORM + Boostrap + Docker)

# Instalar Docker imagem Postgres

```bash
docker pull postgres
docker run --name asa -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
```

# Executar Docker do banco de dados

```bash
docker start asa
```

# Instalar libs dependentes

```bash
npm install
```

# Executando o projeto

```bash
nodemon app.js
```
