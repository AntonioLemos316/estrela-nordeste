const mongoose = require('mongoose')

const estabelecerConexao = mongoose.connect('mongodb://127.0.0.1:27017/estrela-nordeste')
.then(() => console.log('Conexão estabelecida!'))
.catch(() => console.log('Erro ao se conectar!'))

estabelecerConexao

module.exports = estabelecerConexao