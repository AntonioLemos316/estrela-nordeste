const mongoose = require('mongoose')

const DestinoSchema = new mongoose.Schema({
    cidade: { type: String, required: true },
    estado: { type: String, required: true},
})

module.exports = mongoose.model('Destino', DestinoSchema)

/* 
Exemplo 1
{
  "cidade": "Recife",
  "estado": "PE"
}

Exemplo 2
{
  "cidade": "Pipa",
  "estado": "RN"
}

Exemplo 3
{
  "cidade": "Maceio",
  "estado": "AL"
}
*/
