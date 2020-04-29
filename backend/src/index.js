const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));


app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Servidor rodando na porta: 3333"));