const express = require('express')
const User = require('../models/UserModel.js')

const router = express.Router()

// Exemplo http://localhost:3000/users
router.post('/', async (req, res) => {
    const {nome, senha, email} = req.body
    if(!nome || !senha || !email){
        return res.status(400).send({message: "Preencha todos os campos!"})
    }
    try {
        const usuarioExiste = await User.findOne({email}) 
        if(usuarioExiste){
            return res.status(400).send({message: "Usuario já existe"})
        }

        const user = await User.create({nome, senha, email})
        return res.status(201).send({message: "Usuario criado!", user})
    } catch (error) {
        return res.status(500).send({message: "Erro na requisição", error: error.message})
    }
})

// Exemplo http://localhost:3000/users
router.get('/', async (req, res) => {
    try {
        const todosUsuarios = await User.find({})

        return res.status(200).send({message: "Usuarios encontrados!", count: todosUsuarios.length, todosUsuarios})
    } catch (error) {
        return res.status(500).send({message: "Erro na requisição", error: error.message})
    }
})

// Exemplo http://localhost:3000/users/:id
router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findById(id)

        return res.status(200).send({message: "Usuario encontrado!", user})
    } catch (error) {
        return res.status(500).send({message: "Erro na requisição", error: error.message})
    }
})

// Exemplo http://localhost:3000/users/:id
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {nome, senha, email} = req.body
    if(!nome && !senha && !email){
        return res.status(400).send({message: "Preencha um campo"})
    }
    try {
        const usuarioExiste = await User.findById(id)
        if(usuarioExiste){
            const atulizacaoDoUsuario = {
                nome: nome !== undefined ? nome : usuarioExiste.nome,
                senha: senha !== undefined ? senha : usuarioExiste.senha,
                email: email !== undefined ? email : usuarioExiste.email
            }

            const usuarioAtualizado = await User.findByIdAndUpdate(id, atulizacaoDoUsuario, {new: true})
            return res.status(200).send({message: "Usuario Atualizado", usuarioAtualizado})
        }

        return res.status(404).send({message: "Usuario não encontrado!"})
    } catch (error) {
        return res.status(500).send({message: "Erro na requisição", error: error.message})
    }
})

// Exemplo http://localhost:3000/users/:id
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const usuarioDeletado = await User.findByIdAndDelete(id)
        if(usuarioDeletado){
            return res.status(200).send({message: "Usuario deletado com sucesso!"})
        }

    } catch (error) {
        return res.status(500).send({message: "Erro ao deletar usuario", error: error.message });
    }
})

module.exports = router