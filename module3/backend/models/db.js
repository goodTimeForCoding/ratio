const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

//создаём соединение с БД
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD,
  charset: dbConfig.CHARSET
});

connection.connect(err => {
  if (err) throw err;
  console.log("успешное соединение с БД");
});

//экспортируем соединение
module.exports = connection;