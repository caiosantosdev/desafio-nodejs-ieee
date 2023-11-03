const express = require('express');
const app = express();
const router = require('./routes.js');
const database = require('./src/database/index.js');


app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.database = database;



app.listen(8000, () =>{
    console.log("Servidor escutando na porta 8000");
});
module.exports = app;