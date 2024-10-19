const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quarto: { type: mongoose.Schema.Types.ObjectId, ref: 'Quarto' },
  dataInicial: { type: Date, required: true },
  dataFinal: { type: Date, required: true },
  confirmacao: { type: Boolean, default: false },
});

module.exports = mongoose.model(Reserva, ReservaSchema);

/* 
Exemplo 1 
{
  "user": "60d21b4667d0d8992e610c85",  // ID do usuário "Lemos"
  "quarto": "60d21b4667d0d8992e610c86", // ID do quarto que será reservado
  "dataInicial": "2024-10-20T14:00:00Z",
  "dataFinal": "2024-10-25T10:00:00Z",
  "confirmacao": false
}

Exemplo 2 
{
  "user": "60d21b4667d0d8992e610c87",  // ID do usuário "Ana"
  "quarto": "60d21b4667d0d8992e610c88", // ID do quarto que será reservado
  "dataInicial": "2024-11-01T14:00:00Z",
  "dataFinal": "2024-11-05T10:00:00Z",
  "confirmacao": true
}
*/
