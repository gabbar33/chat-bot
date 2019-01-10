
const getGameId = function () {
    this.gameId = 1;

    return this.gameId;
}

const getGameName = function () {
    this.gameName = 'Quiniela';
    return this.gameName;
}

const getContestNumber = function () {
    this.constestNumber = 3009;
    return this.constestNumber;
}

module.exports = {
    getGameId,
    getGameName
}