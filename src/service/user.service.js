const {createUserDB} = require("../repository/user.repository");

const bcrypt = require('bcrypt');

async function createUser(user){
    const data = await createUserDB(user);
    return data;
}


module.exports = {createUser}