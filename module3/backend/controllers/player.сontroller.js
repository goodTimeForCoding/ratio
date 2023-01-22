const Player = require("../models/player.model.js");

//создаём и сохраняем нового игрока
exports.addPlayer = function (request, response) {
  console.log("НАЧАЛИ ДОБАВЛЯТЬ ИГРОКА");
  console.log(request.body);
  //валидизируем запрос
  if (!request.body) {
    response.status(400).send({
      message: "У нас не может не быть контента"
    })
  }

  // создание нового игрока
  const player = new Player({
    name: request.body.name,
    time: request.body.time
  });

  Player.push(player, (err, data) => {
    if (err)
      response.status(500).send({
        message: err.message || "Произошла ошибка во время выполнения кода"
      });
    else response.send(data);
  });
};

//получение всех игроков из БД
exports.getPlayers = function (request, response) {
  Player.getAll((err, data) => {
    if (err)
      response.status(500).send({
        message:
          err.message || "Что-то случилось во время получения данных"
      });
    else
      response.send(data);
  });
};



