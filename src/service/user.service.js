const {createUserDB,getUserByEmailDB} = require("../repository/user.repository");
const {bcrypt} = require('bcrypt');
const salt = 3;

async function createUser(user){
    const foundUser = await getUserByEmailDB(user.email);
    if(foundUser) throw new Error("this user already exist");
    const hashPasssword = await bcrypt.hash(user.password, salt);
    const data = await createUserDB({...user, password: hashPasssword});
    if(!data.length) throw new Error('user is not created');
    return data;
}
async function getUserByEmail(users){
    const data = await getUserByEmailDB(users);
    return data;
}


module.exports = {createUser, getUserByEmail}