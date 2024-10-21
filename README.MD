# API Estrela Nordeste

#### DSI 06 | Grupo: Lucas Rodrigues, Gabriel Rodrigues, Fábio Lima, Vinicius Soares
#### Apoio: Antônio Marques
A API Estrela do Nordeste, fornecerá base para uma plataforma digital destinada a conectar viajantes com opções de hospedagem em hotéis em toda a área de Pernambuco. Com uma interface amigável, permite que usuários pesquisem, compare e reserve hotéis de forma eficiente e segura.

## Funcionalidades

- Cadastro de usuários, destinos, hotéis, quartos e reservas
- Login de usuários (em desenvolvimento)
- Exibição de usuários, destinos, hotéis, quartos e reservas
- Atualização de usuários, destinos, hotéis, quartos e reservas
- Deleção de usuários, destinos, hotéis, quartos e reservas
- Finalização de reserva (em desenvolvimento)

## Tecnologias Utilizadas

- **Front-end**: 
  - React(em planejamento)

- **Back-end**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Estrutura do Projeto
```
estrela-nordeste/
│
├── server/
│   ├── config/
│   │   ├── mongoDb.js
│   ├── models/
│   │   ├── DestinoModel.js
│   │   └── HotelModel.js
│   │   └── QuartoModel.js
│   │   └── ReservaModel.js
│   │   └── UserModel.js
│   ├── routes/
│   │   ├── DestinoRoutes.js
│   │   └── HotelRoutes.js
│   │   └── QuartoRoutes.js
│   │   └── ReservaRoutes.js
│   │   └── UserRoutes.js
│   ├── .gitignore
│   └── index.js
│   └── package-lock.json
│   └── package.json
└── README.md
```

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [ThunderClient](https://www.thunderclient.com/) para gerenciar as requisições ou postman
- [Postman](https://www.postman.com/downloads/) para gerenciar as requisições ou thunder client
- [MongoDB](https://www.mongodb.com/try/download/community) para gerenciar o MongoDB / Mongoose

### Configuração do Banco de Dados

1. Inicie o compass para conectar ao MongoDB ou inicie com a extensão no vscode chamada de Database Client JDBC criado por Weijan Chen.
2. Ao inicar o servidor express o mongoDb criara a base de dados estrela-nordeste se passado no endereço da conexão.

### Executando o Projeto

1. Clone o repositório:
```bash
   git clone https://github.com/AntonioLemos316/estrela-nordeste.git

   cd server // mudança de pasta

   npm install // instalando o node_modules

   npm run dev // iniciando o servidor
```

## Exemplo de uso

### Rotas

#### Users
```
POST    /users
{
 "nome":"Antonio",
 "senha":123,
 "email":"antonio@example.com"
}

GET     /users

GET     /users/:id

PATCH   /users/:id
{
 "senha":"1234"
}

DELETE  /users/:id
```

#### Destinos
```
POST    /destinos
{
 "cidade": "Maceio",
 "estado": "AL"
}

GET     /destinos

GET     /destinos/:id

PATCH   /destinos/:id
{
 "cidade":"Recife"
}

DELETE  /destinos/:id
```

#### Hoteis
```
POST    /hoteis
{
  "nome": "Hotel Paradise",
  "endereco": "Rua das Flores, 123, São Paulo",
  "destinoId": "60d21b4667d0d8992e610c89",  
  "quartosIds": ["60d21b4667d0d8992e610c86", "60d21b4667d0d8992e610c88"] 
}

GET     /hoteis

GET     /hoteis/:id

PATCH   /hoteis/:id
{
  "nome": "Hotel Paraiso"
}

DELETE  /hoteis/:id
```

#### Quartos
```
POST    /quartos
{
  "hotelId": "6714465746d5d9ffaf1a94ff",  
  "tipoDoQuarto": "Duplo",
  "preco": 200,
  "capacidade": 2,
  "disponibilidade": false
}

GET     /quartos

GET     /quartos/:id

PATCH   /quartos/:id
{
  "disponibilidade": true
}

DELETE  /quartos/:id
```

#### Reservas
```
POST    /reservas
{
  "userId": "671454ecffa204b6f6b7e604",  
  "quartoId": "67144b9494977f027fc94ddc", 
  "dataInicial": "2024-10-29",
  "dataFinal": "2024-11-14"
}

GET     /reservas

GET     /reservas/:id

PATCH   /reservas/:id
{
  "dataInicial": "2024-11-10",
  "dataFinal": "2024-12-10"
}

DELETE  /reservas/:id
