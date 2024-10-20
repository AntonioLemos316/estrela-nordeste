const express = require('express')
const Reserva = require('../models/ReservaModel.js')

const router = express.Router()

// Exemplo http://localhost:3000/reservas/
router.post('/', async (req, res) => {
    const {userId, quartoId, dataInicial, dataFinal, confirmacao} = req.body
    if(!userId || !quartoId || !dataInicial || !dataFinal){
        return res.status(400).send({message: "Preencha todos os campos!"})
    }
    try {
        const reserva = await Reserva.create({userId, quartoId, dataInicial, dataFinal, confirmacao})
        return res.status(201).send({message: "Reserva criada", reserva})
    } catch (error) {
        return res.status(500).send({message: "Erro em criar Reserva", error: error.message})
    }
})

// Exemplo http://localhost:3000/reservas/
router.get('/', async (req, res) => {
    try {
        const reservas = await Reserva.find({})

        return res.status(200).send({message: "Reservas encontradas", count: reservas.length, reservas})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar reservas", error: error.message})
    }
})


// Exemplo http://localhost:3000/reservas/:id
router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const reservaExiste = await Reserva.findById(id)
        if(reservaExiste){
            return res.status(200).send({message: "Reserva encontrada", reservaExiste})
        }

        return res.status(404).send({message: "Reserva não encontrada"})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar Reserva", error: error.message})
    }
})

// Exemplo http://localhost:3000/reservas/:id
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {dataInicial, dataFinal} = req.body
    if(!dataInicial && !dataFinal){
        return res.status(400).send({message: "Preencha um campo"})
    }
    try {
        const reservaExiste = await Reserva.findById(id)
        if(reservaExiste){
            const atulizacaoDaReserva = {
                dataInicial: dataInicial !== undefined ? dataInicial : reservaExiste.dataInicial,
                dataFinal: dataFinal !== undefined ? dataFinal : reservaExiste.dataFinal
            }

            const reservaAtualizada = await Reserva.findByIdAndUpdate(id, atulizacaoDaReserva, {new: true})
            return res.status(200).send({message: "Reserva Atualizada", reservaAtualizada})
        }

        return res.status(404).send({message: "Reserva não encontrada"})
    } catch (error) {
        return res.status(500).send({message: "Erro em atualizar Reserva", error: error.message})
    }
})

// Exemplo http://localhost:3000/reservas/:id
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const reservaDeletada = await Reserva.findByIdAndDelete(id)
        if(reservaDeletada){
            return res.status(200).send({message: "Reserva deletada!"})
        }

    } catch (error) {
        return res.status(500).send({message: "Erro em deletar Reserva", error: error.message });
    }
})

module.exports = router