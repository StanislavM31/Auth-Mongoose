const {createUserDB,getUserByEmailDB} = require("../repository/user.repository");
const bcrypt = require('bcrypt');
const salt = 3;

async function createUser(user){
    const foundUser = await getUserByEmailDB(user);
    if(foundUser.length) throw new Error("this user already exist");
    const hashPasssword = await bcrypt.hash(user.password, salt);
    const data = await createUserDB({...user, password: hashPasssword});
    if(!data.length) throw new Error('user is not created');
    return data;
}
async function getUserByEmail(user){
    const data = await getUserByEmailDB(user);
    return data;
}

async function authUser(user){
    const findUser = await getUserByEmailDB(user);
    if(!findUser.length) throw new Error('email is invalid');
    if(!(await bcrypt.compare(user.password, findUser[0].password))) throw new Error("password is invalid");
    return findUser;
}


module.exports = {createUser, getUserByEmail, authUser}