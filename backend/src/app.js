const express = require('express');
require('./database/connection');

const port = process.env.PORT || 8000;
const signUp = require('./routers/signUp');
const ask = require('./routers/ask');
const login = require('./routers/login');
const question = require('./routers/question');
const answer = require('./routers/answer');
const home = require('./routers/home');
const getUserData = require('./routers/getUserData');

const app = express();

app.use(express.json());
app.use(getUserData);
app.use(signUp);
app.use(ask);
app.use(question);
app.use(answer);
app.use(login);
app.use(home);

app.listen(port);