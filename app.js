const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());




app.listen(8000, () =>{
    console.log("Servidor escutando na porta 8000");
});
module.exports = app;