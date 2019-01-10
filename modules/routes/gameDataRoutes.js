
const gameDataModule = require('../gameModule/gameData');

const gameData = function (req, res) {
    console.log(gameDataModule.getGameId());
    res.json({
        gameId: gameDataModule.getGameId(),
        gameName: gameDataModule.getGameName()
    });
}

module.exports = {
    gameData
}