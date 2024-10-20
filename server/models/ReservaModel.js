const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quarto: { type: mongoose.Schema.Types.ObjectId, ref: 'Quarto' },
  dataInicial: { type: Date, required: true },
  dataFinal: { type: Date, required: true },
  confirmacao: { type: Boolean, default: false },
});

module.exports = mongoose.model('Reserva', ReservaSchema);

/* 
Exemplo 1 

{
  "userId": "671454ecffa204b6f6b7e604",  
  "quartoId": "67144b9494977f027fc94ddc", 
  "dataInicial": "2024-10-29",
  "dataFinal": "2024-11-14"
}

Exemplo 2 
{
  "userId": "60d21b4667d0d8992e610c87",  
  "quartoId": "60d21b4667d0d8992e610c88", 
  "dataInicial": "2024-11-01",
  "dataFinal": "2024-11-05",
}
*/
