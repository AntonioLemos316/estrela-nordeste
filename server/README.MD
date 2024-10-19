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