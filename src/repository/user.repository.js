const { TableUser } = require("../../db");

async function createUserDB(user) {
  console.log("+");
  await TableUser.create(user);
  const data = await TableUser.find();
  return data;
}

async function getUserByEmailDB(users) {
  /* TableUser.findOne --вернет объект*/
  const data = await TableUser.find({email: users.email});
  return data
}
module.exports = { createUserDB, getUserByEmailDB };
