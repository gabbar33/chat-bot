
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const builder = require('botbuilder');
const port = process.env.port || 3000;

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

// chat connector for communicating with the Bot Framework Service 
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users  
app.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});


app.listen(port, function () {
    const dateTime = new Date();
    const message = 'server running on port: ' + port + ' Started at:. ' + dateTime;
    console.log(message);
});