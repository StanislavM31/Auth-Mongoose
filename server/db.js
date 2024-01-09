const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/auth')

const TableUser = mongoose.model('users', {
    name: String,
    surname: String,
    age: String,
    email: String,
    password: String,
});

const ObjectId = mongoose.Types.ObjectId

module.exports = { TableUser, ObjectId }



