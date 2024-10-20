const express = require('express')
const estabelecerConexao = require('./config/mongoDb.js')
const UserRoutes = require('./routes/UserRoutes.js')
const DestinoRoutes = require('./routes/DestinoRoutes.js')
const HotelRoutes = require('./routes/HotelRoutes.js')
const QuartoRoutes = require('./routes/QuartoRoutes.js')
const ReservaRoutes = require('./routes/ReservaRoutes.js')


const app = express()

// Conexão a DB estrela-nordeste
estabelecerConexao

// Fazendo com que a API reconheça os dados em JSON
app.use(express.json())

// Caminho das Rotas que serão utilizadas
app.use('/users', UserRoutes)
app.use('/destinos', DestinoRoutes)
app.use('/hoteis', HotelRoutes)
app.use('/quartos', QuartoRoutes)
app.use('/reservas', ReservaRoutes)

// Tratamento de erro caso passe a rota invalida
app.use((req, res) => {
    res.status(404).send({message: '404 - Not Found, rota inválida!'});
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => console.log('Server rodando em http://localhost:3000'))