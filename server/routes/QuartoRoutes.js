const express = require('express')
const Quarto = require('../models/QuartoModel.js')

const router = express.Router()

// Exemplo http://localhost:3000/quartos/
router.post('/', async (req, res) => {
    const {hotelId, tipoDoQuarto, preco, capacidade, disponibilidade} = req.body
    if(!hotelId || !tipoDoQuarto || !preco || !capacidade){
        return res.status(400).send({message: "Preencha todos os campos!"})
    }
    try {
        const quarto = await Quarto.create({hotelId, tipoDoQuarto, preco, capacidade, disponibilidade})
        return res.status(201).send({message: "Quarto criado", quarto})
    } catch (error) {
        return res.status(500).send({message: "Erro em criar Quarto", error: error.message})
    }
})

// Exemplo http://localhost:3000/quartos/
router.get('/', async (req, res) => {
    try {
        const quartos = await Quarto.find({})

        return res.status(200).send({message: "Quartos encontrados", count: quartos.length, quartos})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar quartos", error: error.message})
    }
})


// Exemplo http://localhost:3000/quartos/:id
router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const quartoExiste = await Quarto.findById(id)
        if(quartoExiste){
            return res.status(200).send({message: "Quarto encontrado", quartoExiste})
        }

        return res.status(404).send({message: "Quarto não encontrado"})
    } catch (error) {
        return res.status(500).send({message: "Erro em buscar Quarto", error: error.message})
    }
})

// Exemplo http://localhost:3000/quartos/:id
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {tipoDoQuarto, preco, capacidade, disponibilidade} = req.body
    if(!tipoDoQuarto && !preco && !capacidade && !disponibilidade){
        return res.status(400).send({message: "Preencha um campo"})
    }
    try {
        const quartoExiste = await Quarto.findById(id)
        if(quartoExiste){
            const atulizacaoDoQuarto = {
                tipoDoQuarto: tipoDoQuarto !== undefined ? tipoDoQuarto : quartoExiste.tipoDoQuarto,
                preco: preco !== undefined ? preco : quartoExiste.preco,
                capacidade: capacidade !== undefined ? capacidade : quartoExiste.capacidade,
                disponibilidade: disponibilidade !== undefined ? disponibilidade : quartoExiste.disponibilidade
            }

            const quartoAtualizado = await Quarto.findByIdAndUpdate(id, atulizacaoDoQuarto, {new: true})
            return res.status(200).send({message: "Quarto Atualizado", quartoAtualizado})
        }

        return res.status(404).send({message: "Quarto não encontrado"})
    } catch (error) {
        return res.status(500).send({message: "Erro em atualizar Quarto", error: error.message})
    }
})

// Exemplo http://localhost:3000/quartos/:id
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const quartoDeletado = await Quarto.findByIdAndDelete(id)
        if(quartoDeletado){
            return res.status(200).send({message: "Quarto deletado com sucesso!"})
        }

    } catch (error) {
        return res.status(500).send({message: "Erro em deletar Quarto", error: error.message });
    }
})

module.exports = router