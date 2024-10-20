## API de Hoteis

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