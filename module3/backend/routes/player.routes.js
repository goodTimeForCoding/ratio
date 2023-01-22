const express = require("express");
const playerController = require("../controllers/player.сontroller.js");
const playerRouter = express.Router();


playerRouter.get("/v1/record/", playerController.getPlayers);
playerRouter.post("/v1/record/", playerController.addPlayer);

module.exports = playerRouter;