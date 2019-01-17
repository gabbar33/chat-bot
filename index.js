
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const gameDataRoute = require('./modules/routes/gameDataRoutes');
const playerBetRoute = require('./modules/routes/playerBetRoutes');
const userSignIn = require('./modules/userModule/signIn');
const userSignUp = require('./modules/userModule/signUp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('',gameDataRoute.gameData);
app.get('', userSignIn.userSignIn);
app.get('/signUp', userSignUp.userSignUp);

app.post('/bet', playerBetRoute.playerBet);

app.listen(port, function () {
    const dateTime = new Date();
    const message = 'server running on port: ' + port + ' Started at:. ' + dateTime;
    console.log(message);
});