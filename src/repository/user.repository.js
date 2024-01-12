const { TableUser } = require("../../db");

async function createUserDB(user) {
  console.log("+");
  await TableUser.create(user);
  const data = await TableUser.find();
  return data;
}

async function getUserByEmailDB(user) {
  /* TableUser.findOne --вернет объект*/
  const data = await TableUser.find({email: user.email});
  console.log(data);
  return data
}
module.exports = { createUserDB, getUserByEmailDB };
