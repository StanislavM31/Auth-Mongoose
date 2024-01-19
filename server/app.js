const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors');
const user = require('./src/controller/user.controller');

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', user);

app.use((error, req, res, _next)=> res.send(error.message));

module.exports = app;
