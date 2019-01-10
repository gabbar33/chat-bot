const playerBetModule = require('../gameModule/playerBet');


const playerBet = function (req, res) {
    const constestNumber = req.body.constestNumber;
    const date = req.body.date;
    const drawTime = req.body.drawTime;
    const betNumber = req.body.betNumber;
    const betAmount = req.body.betAmount;
    const betVariation = req.body.betVariation;
    const betType = req.body.betType;
    res.json({
        message:"data seved"
    })

    playerBetModule.setPlayerBet(constestNumber, date, drawTime, betNumber, betAmount, betVariation, betType);

}

module.exports = {
    playerBet
}