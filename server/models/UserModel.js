const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true, },
    senha: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    funcao: { type: String, enum: ['normal', 'admin'], default: 'normal' },
    reservas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reserva' }],
})

module.exports = mongoose.model('User', UserSchema)

/* 
Exemplo de User
{
  "nome": "Lemos",
  "senha": "123456",
  "email": "lemos@example.com"
}

{
  "nome": "Ana",
  "senha": "abc123",
  "email": "ana@example.com"
}
*/
