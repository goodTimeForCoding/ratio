const connection = require("./db.js");

class Player {
  constructor (player) {
    this.name = player.name;
    this.time = player.time;
  }

  static getAll (result) {
    connection.query("SELECT * FROM players", function (err, res) {
      if (err) {
        console.log(err);
        result(null, err);
        return;
      }
      console.log(res);
      result(null, res);
    });
  }

  static push (newPlayer, result) {
    connection.query("INSERT INTO players SET ?", newPlayer, function (err, res) {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      console.log(res);
      result(null, res);
    });
  }
}

module.exports = Player;