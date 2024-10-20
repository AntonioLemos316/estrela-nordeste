const express = require('express')
const Destino = require('../models/DestinoModel.js')

const router = express.Router()

// Exemplo http://localhost:3000/destinos/
router.post('/', async (req, res) => {
    const {cidade, estado} = req.body
    if(!cidade || !estado){
        return res.status(400).send({message: "Preencha todos os campos!"})
    }
    try {
        const destino = await Destino.create({cidade, estado})
        
        return res.status(201).send({message: "Destino criado", destino})
    } catch (error) {
        return res.status(500).send({message: "Erro em criar destino", error: error.message})
    }
})

// Exemplo http://localhost:3000/destinos/
router.get('/', async (req, res) => {
    try {
        const destinos = await Destino.find({})

        return res.status(200).send({message: "Destinos encontrados", count: destinos.length, destinos})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar destinos", error: error.message})
    }
})


// Exemplo http://localhost:3000/destinos/:id
router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const destinoExiste = await Destino.findById(id)
        if(destinoExiste){
            return res.status(200).send({message: "Destino encontrado", destinoExiste})
        }

        return res.status(404).send({message: "Destino não encontrado"})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar destinos", error: error.message})
    }
})

// Exemplo http://localhost:3000/destinos/:id
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {cidade, estado} = req.body
    // OBS; validação a ser adicionada aos outras rotas patch
    if(!cidade && !estado){
        return res.status(400).send({message: "Preencha um campo"})
    }
    try {
        const destinoExiste = await Destino.findById(id)
        if(destinoExiste){
            const atulizacaoDoDestino = {
                cidade: cidade !== undefined ? cidade : destinoExiste.cidade,
                estado: estado !== undefined ? estado : destinoExiste.estado
            }

            const destinoAtualizado = await Destino.findByIdAndUpdate(id, atulizacaoDoDestino, {new: true})
            return res.status(200).send({message: "Destino Atualizado", destinoAtualizado})
        }

        return res.status(404).send({message: "Destino não encontrado"})
    } catch (error) {
        return res.status(500).send({message: "Erro em atualizar destino", error: error.message})
    }
})

// Exemplo http://localhost:3000/destinos/:id
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const destinoDeletado = await Destino.findByIdAndDelete(id)
        if(destinoDeletado){
            return res.status(200).send({message: "Destino deletado com sucesso!"})
        }

    } catch (error) {
        return res.status(500).send({message: "Erro em deletar destino", error: error.message });
    }
})

module.exports = router