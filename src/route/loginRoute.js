const express = require('express');
const User = require('../models/user');
const token = require('../service/serviceJwt')
const bcrypt = require('bcryptjs')


const router = express.Router();


router.get('/', async (req , res) => {
    res.status(200).send('funcionando')
})

router.post('/authenticate', async (req, res) => {
    
    const {name , password} = req.body;

    try{

        const user = await User.findOne({name,password});

        if(!user)
            return res.status(404).send('User not found');

        user.password = undefined;

        res.send({
            user,
            token: token({id: user.id}),
        });

    }catch(e){

        res.status(400).send('Erro: '+e)

    }  
});




module.exports = router;