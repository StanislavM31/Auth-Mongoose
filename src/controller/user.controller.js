const express = require('express');
const route = express.Router();
const { createUser, getUserByEmail, authUser} = require('../service/user.service');
const {buildResponse} = require('../helper/buildResponse');

route.post('/', async (req,res)=>{
    try {
        const data = await createUser(req.body)
        console.log(data);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 400);
    }
})
route.get('/', async (req,res)=>{
    try {
        const data = await getUserByEmail(req.body)
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})
route.post('/auth', async (req, res)=>{
    try {
        const data = await authUser(req.body);
        buildResponse(res, data, 200)
    } catch (error) {
        buildResponse(res, error.message, 400)
    }
})

module.exports = route;