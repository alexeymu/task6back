const express = require("express");
const userRouter = express.Router();
const { getUsersList, addUser } = require("../controllers/userController");


userRouter.get("/", getUsersList);
userRouter.post("/", addUser);

module.exports = userRouter;