const express = require('express');
const validationToken = require('../service/serviceValidationToken');
const router = express.Router();
const User = require('../models/user');
const advClients = require('../models/register');
const { deleteOne } = require('../models/register');
const { ObjectId } = require('mongodb');

router.use(validationToken);


//Rota principal
router.get('/', (req, res) => {
    res.send({ ok:true, user: req.userId });
});


//Rota de Leitura de Registros
router.get('/register',async (req, res) => {
    try{

        const client = await advClients.find();
        const clientName = client.map((client) =>client.name +" "+ client.lastName +" "+ client.cpf);
        res.status(200).json(clientName)

    }catch(e){
        return res.status(500).json({error: e})
    }
});


//Rotas para Ler apenas um Registro
router.get('/register/:id', async (req , res) => {
        const id = req.params.id;

        try {

            const client = await advClients.findOne({ _id: id});

            if(!await client){
                
                return res.status(422).json({message: "Usuario não encontrado"});
            }

            res.status(200).json(client);
            
        } catch (e) {
            return res.status(500).json({error: e})
        }
}); 

//Rota para Criar novos Registros
router.post('/register/new', async (req , res) => {

    const {cpf , rg} = req.body;
    const user = advClients.findOne({cpf,rg});

    if(await user)
        return res.status(400).send('Usuario já existe')

    try{
       const client = await advClients.create(req.body);
       
       return res.status(201).json(client);
    }catch(e){
        return res.status(500).json({error:e})
    }
});


//Rota para Atualizar Registros
router.patch('/register/:id', async(req,res) => {

    const id = req.params.id;
    
    const user = req.body;
    try {
        const updateClient = await advClients.updateOne({ _id: id}, user)
        
        res.status(200).json(user)
    } catch (e) {
        return res.status(500).json({error:e})
    }
});


//Rota para Deletar um Registro
router.delete('/register/:id', async(req,res) => {
    const id = req.params.id;

    try {
        const client = await advClients.deleteOne({ _id: id});

        res.status(200).json({message: "Deletado com sucesso"})
    } catch (e) {
        return res.status(500).json({error:e})
    }
       
    


});










module.exports = router;