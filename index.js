// Loads the configuration from config.env to process.env
require('dotenv').config({path: './config.env'});
const userRouter = require("./routes/users")
const messageRouter = require("./routes/messages")

const express = require('express');
const cors = require('cors');
// get MongoDB driver connection
const dbo = require('./db/conn');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/messages", messageRouter);
// app.use("/client", recordRouter);

// Global error handling
app.use(function (req, res, next) {
  res.status(500).send('Something broke!');
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
