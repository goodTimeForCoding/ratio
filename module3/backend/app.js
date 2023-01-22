const express = require("express");
const playerRouter = require("./routes/player.routes.js")

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

/*создаем парсер для данных application/x-www-form-urlencoded
Значение extended: false указывает, что объект - результат парсинга будет представлять набор пар ключ-значение,
а каждое значение может быть представлено в виде строки или массива*/
app.use(express.urlencoded({extended: true}));

app.use("/api", playerRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found")
});

app.listen(3004, function () {
  console.log("Сервер ожидает подключения...");
});