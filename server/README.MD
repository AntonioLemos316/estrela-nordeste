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