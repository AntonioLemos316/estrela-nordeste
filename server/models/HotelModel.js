const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  destino: { type: mongoose.Schema.Types.ObjectId, ref: 'Destino' },
  quartos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quarto' }],
});

module.exports = mongoose.model('Hotel', HotelSchema);

/* 
Exemplo 1 de Hotel
{
  "nome": "Hotel Paradise",
  "endereco": "Rua das Flores, 123, São Paulo",
  "destino": "60d21b4667d0d8992e610c89",  // ID do destino
  "quartos": ["60d21b4667d0d8992e610c86", "60d21b4667d0d8992e610c88"] // IDs dos quartos
}

Exemplo 2 de Hotel
{
  "nome": "Hotel Sunshine",
  "endereco": "Avenida do Sol, 456, Rio de Janeiro",
  "destino": "60d21b4667d0d8992e610c90",  // ID do destino
  "quartos": ["60d21b4667d0d8992e610c91"] // ID dos quartos
}
*/
