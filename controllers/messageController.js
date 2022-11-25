const dbo = require('../db/conn');

const getMessagesList = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();

    const {recipient} = req.body

    dbConnect
      .collection('task6_messages')
      .find({recipient})
      .sort({"dateCreate": -1})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send('Error fetching messages!');
        } else {
          res.status(200).json(result);
        }
      });
  } catch (e) {
    res.status(500).send('getMessagesList is broken!');
  }
}

const getMessages = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();

    dbConnect
      .collection('task6_messages')
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send('Error fetching messages!');
        } else {
          res.status(200).json(result);
        }
      });
  } catch (e) {
    res.status(500).send('getMessagesList is broken!');
  }
}

const addMessage = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    const {username, recipient, title, message} = req.body

    const record = {
      username,
      recipient,
      title,
      message,
      dateCreate: new Date()
    }

    dbConnect
      .collection('task6_messages')
      .insertOne(record)

    res.json({message: 'Success'});
  } catch (e) {
    res.status(500).send('addMessage is broken!');
  }

}

module.exports = {getMessagesList, addMessage, getMessages}
