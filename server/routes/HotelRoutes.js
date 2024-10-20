const express = require('express')
const Hotel = require('../models/HotelModel.js')

const router = express.Router()

// Exemplo http://localhost:3000/hoteis/
router.post('/', async (req, res) => {
    const {nome, endereco, destinoId, quartosIds} = req.body
    if(!nome || !endereco || !destinoId || !quartosIds){
        return res.status(400).send({message: "Preencha todos os campos!"})
    }
    try {
        const hotel = await Hotel.create({nome, endereco, destinoId, quartosIds})
        
        return res.status(201).send({message: "Hotel criado", hotel})
    } catch (error) {
        return res.status(500).send({message: "Erro em criar hotel", error: error.message})
    }
})

// Exemplo http://localhost:3000/hoteis/
router.get('/', async (req, res) => {
    try {
        const hoteis = await Hotel.find({})

        return res.status(200).send({message: "Hoteis encontrados", count: hoteis.length, hoteis})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar hoteis", error: error.message})
    }
})


// Exemplo http://localhost:3000/hoteis/:id
router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const hotelExiste = await Hotel.findById(id)
        if(hotelExiste){
            return res.status(200).send({message: "Hotel encontrado", hotelExiste})
        }

        return res.status(404).send({message: "Hotel não encontrado"})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar hotel", error: error.message})
    }
})

// Exemplo http://localhost:3000/hoteis/:id
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {nome, endereco, destinoId, quartosIds} = req.body
    if(!nome && !endereco && !destinoId && !quartosIds){
        return res.status(400).send({message: "Preencha um campo"})
    }
    try {
        const hotelExiste = await Hotel.findById(id)
        if(hotelExiste){
            const atulizacaoDoHotel = {
                nome: nome !== undefined ? nome : hotelExiste.nome,
                endereco: endereco !== undefined ? endereco : hotelExiste.endereco,
                destinoId: destinoId !== undefined ? destinoId : hotelExiste.destino,
                quartosIds: quartosIds !== undefined ? quartosIds : hotelExiste.quartos
            }

            const hotelAtualizado = await Hotel.findByIdAndUpdate(id, atulizacaoDoHotel, {new: true})
            return res.status(200).send({message: "Hotel Atualizado", hotelAtualizado})
        }

        return res.status(404).send({message: "Hotel não encontrado"})
    } catch (error) {
        return res.status(500).send({message: "Erro em atualizar hotel", error: error.message})
    }
})

// Exemplo http://localhost:3000/hoteis/:id
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const hotelDeletado = await Hotel.findByIdAndDelete(id)
        if(hotelDeletado){
            return res.status(200).send({message: "Hotel deletado com sucesso!"})
        }

    } catch (error) {
        return res.status(500).send({message: "Erro em deletar hotel", error: error.message });
    }
})

module.exports = router