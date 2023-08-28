# API Fincheck
Este projeto consiste em uma API seguindo o padrão Rest e tem as seguintes funcionalidades:
  - Autenticação
  - Criação de usuário
  - CRUD de contas bancárias
  - CRUD de transações bancárias
  - GET de dados do usuário
  - GET de categorias

## Documentação da API
### Autenticação
#### Faz o cadastro do usuário
```
  POST /auth/signup
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `body`      | `json` | `{"name": string, "email": string, "password": string}` |

#### Faz o login do usuário
```
  POST /auth/signin
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `body`      | `json` | `{"email": string, "password": string}` |

### Contas Bancárias
#### Retorna todas as contas bancárias de um usuário
```
  GET /bank-accounts
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |

#### Cria uma conta bancária para um usuário
```
  POST /bank-accounts
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |
| `body`      | `json` | `{"name": string, "initialBalance": number, "color": string, "type": CHECKING \| INVESTMENT \| CASH}` |

#### Atualiza uma conta bancária de um usuário
```
  PUT /bank-accounts/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | O ID da conta bancária |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |
| `body`      | `json` | `{"name": string, "initialBalance": number, "color": string, "type": CHECKING \| INVESTMENT \| CASH}` |

#### Exclui uma conta bancária
```
  DELETE /bank-accounts/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | O ID da conta bancária |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |

### Categorias
#### Retorna todas as categorias de um usuário
```
  GET /categories
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |

### Transações
#### Retorna as transações de um usuário
```
  GET /transactions?month=${month}&year=${year}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |
| `month` | `query param` | `mês para limitar a busca de transações` |
| `year` | `query param` | `ano para limitar a busca de transações` |

#### Cria uma transação
```
  POST /transactions
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |
| `body`      | `json` | `{"bankAccountId": string, "categoryId": string, "name": string, "value": number, "date": string, "type": INCOME \| EXPENSE}` |

#### Edita uma transação
```
  PUT /transactions/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | O ID da transação |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |
| `body`      | `json` | `{"bankAccountId": string, "categoryId": string, "name": string, "value": number, "date": string, "type": INCOME \| EXPENSE}` |

#### Exclui uma transação
```
  DELETE /transactions/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | O ID da transação |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |


### Usuários
#### Retorna todos os dados de um usuário
```
  GET /users/me
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `Header` | Código JWT gerado no momento da autenticação utilizando o padrão Bearer |

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
