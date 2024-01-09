const { TableUser} = require("../../db");

async function createUserDB(user){
    console.log("+");
    await TableUser.create(user);
    const data = await TableUser.find();
    return data;
}

async function getUserByEmailDB(){
    const existUser = 1
    return 1
}
module.exports = {createUserDB}