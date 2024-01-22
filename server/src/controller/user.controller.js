const express = require("express");
const route = express.Router();
const {
  createUser,
  getUserByEmail,
  authUser,
} = require("../service/user.service");
const { buildResponse } = require("../helper/buildResponse");
const { createToken } = require("../helper/jwt");

route.post("/", async (req, res) => {
  try {
    const data = await createUser(req.body);
    const token = createToken(data[data.length - 1]);
    //res.cookie("Bearer", token);
    res.cookie("access_token", token,{
      httpOnly: false,
      secure: true
    });
    /* res.send(data); //есть buildResponse*/
    console.log("+");
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 400);
  }
});
route.get("/", async (req, res) => {
  try {
    const data = await getUserByEmail(req.body);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
route.post("/auth", async (req, res) => {
  try {
    const data = await authUser(req.body);

    res.cookie("access_token", token,{
      httpOnly: false,
      secure: true
    });

    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 400);
  }
});

module.exports = route;
