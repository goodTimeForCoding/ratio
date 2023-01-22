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

// module.exports = class Player {
//     constructor(name, time) {
//         this.name = name;
//         this.time = time;
//     }
//     save() {
//         pool.query(`INSERT INTO players (${this.name}, ${this.time}) VALUES (?,?)`, [this.name, this.time], function(err, data) {
//             if(err) return console.log(err);
//             res.redirect("/");
//           });
//     }
//     static getAll() {
//         pool.query("SELECT * FROM players", function (err, data) {
//             if (err) console.log(err);
//             console.log(data);
//         });
//     }
// }