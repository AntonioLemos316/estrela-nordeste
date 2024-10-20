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
  "hotelId": "6714465746d5d9ffaf1a94ff",  
  "tipoDoQuarto": "Duplo",
  "preco": 200,
  "capacidade": 2,
  "disponibilidade": false
}

Exemplo 2 
{
  "hotelId": "6714465746d5d9ffaf1a94ff",  
  "tipoDoQuarto": "Triplo",
  "preco": 300,
  "capacidade": 3,
  "disponibilidade": true
}
*/
