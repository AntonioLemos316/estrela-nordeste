const mongoose = require('mongoose');

const QuartoSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  tipoDoQuarto: { type: String, required: true },
  preco: { type: Number, required: true },
  capacidade: { type: Number, required: true }, // Número máximo de pessoas
  disponibilidade: { type: Boolean, default: true },
});

module.exports = mongoose.model('Quarto', QuartoSchema);

/* 
Exemplo 1 
{
  "hotel": "60d21b4667d0d8992e610c89",  // ID do hotel "Hotel Paradise"
  "tipoDoQuarto": "Duplo",
  "preco": 200,
  "capacidade": 2,
  "disponibilidade": true
}

Exemplo 2 
{
  "hotel": "60d21b4667d0d8992e610c90",  // ID do hotel "Hotel Sunshine"
  "tipoDoQuarto": "Individual",
  "preco": 150,
  "capacidade": 1,
  "disponibilidade": false
}
*/
