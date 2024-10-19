const mongoose = require('mongoose')

const estabelecerConexao = mongoose.connect('mongodb://127.0.0.1:27017/estrela-nordeste')
.then(() => console.log('Conexão estabelecida ao banco de dados!'))
.catch(() => console.log('Erro ao estabelecer a conexão com o banco de dados!'))

module.exports = estabelecerConexao