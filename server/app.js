const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const cors = require('cors');
const user = require('./src/controller/user.controller');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', user);

app.use((error, req, res, _next)=> res.send(error.message));

module.exports = app;
