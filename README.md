# API Fincheck
Este projeto consiste em uma API seguindo o padrão Rest e tem as seguintes funcionalidades:
  - Autenticação
  - Criação de usuário
  - CRUD de contas bancárias
  - CRUD de transações bancárias
  - GET de dados do usuário
  - GET de categorias

## Documentação da API

## Stack utilizada
- Node.js
- TypeScript
- Nest.js
- JWT (JavaScript Web Token)
- BCryptjs
- Prisma
- PostgreSQL
- Docker

## Rodando localmente

### Requisitos
- É necessário que tenha o yarn instalado para rodar o projeto
- É necessário que tenha o docker instalado para rodar o banco de dados

Clone o projeto, acesse a pasta e instale as dependências

```bash
$ git clone https://github.com/LeandroFilie/fincheck-backend.git

$ cd fincheck-backend

$ npm install
```

Crie um container com a imagem do PostgreSQL no docker
```bash
$ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Entre no container e crie o banco de dados
```bash
$ docker exec -it pg bash

$ psql -U root

$ CREATE DATABASE fincheck;
```

Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis
```env
DATABASE_URL="postgresql://user:password@localhost:5432/databasename?schema=public"
JWT_SECRET=unsecure_jwt_secret
```

Faça a criação do banco de dados com o prisma
```bash
npx prisma migrate dev
```

Por fim, para rodar o projeto
```bash
$ npm run start:dev
```
