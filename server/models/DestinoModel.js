const mongoose = require('mongoose')

const DestinoSchema = new mongoose.model({
    nome: { type: String, required: true },
})

module.exports = mongoose.model('Destino', DestinoSchema)

/* 
Exemplo 1 de Destino
{
  "nome": "São Paulo"
}

Exemplo 2 de Destino
{
  "nome": "Rio de Janeiro"
}
*/