const {createUserDB,getUserByEmailDB} = require("../repository/user.repository");

const bcrypt = require('bcrypt');

async function createUser(user){
    const data = await createUserDB(user);
    return data;
}
async function getUserByEmail(users){
    const data = await getUserByEmailDB(users);
    return data;
}


module.exports = {createUser, getUserByEmail}