const dbo = require('../db/conn');

const getUsersList = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection('task6_users')
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send('Error fetching users!');
        } else {
          res.json(result);
        }
      });
  } catch (e) {
    res.status(500).send('getUsersList is broken!');
  }

}

const addUser = async (req, res) => {
  try {
    const dbConnect = dbo.getDb();
    const {username} = req.body

    const result = await dbConnect
      .collection('task6_users')
      .findOne({username})

    if (!result) {
      dbConnect
        .collection('task6_users')
        .insertOne(
          {
            username
          }
        )
    }
    res.status(200).send();
  } catch (e) {
    res.status(500).send('addUser is broken!');
  }

}

module.exports = {getUsersList, addUser}
