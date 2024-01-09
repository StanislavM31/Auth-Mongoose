const express = require('express');
const route = express.Router();
const { createUser} = require('../service/user.service');

route.post('/', async (req,res)=>{
    try {
        const data = await createUser(req.body)
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = route;