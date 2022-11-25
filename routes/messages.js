const express = require("express");
const messageRouter = express.Router();
const {getMessagesList, addMessage, getMessages} = require("../controllers/messageController");


messageRouter.post("/list", getMessagesList);
messageRouter.get("/", getMessages);
messageRouter.post("/", addMessage);

module.exports = messageRouter;
