const express = require("express");
const flash = require('connect-flash');
const app = express();

const { bootstrapApp } = require('./app/bootstrap');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

bootstrapApp(app);

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Servidor web iniciado: http://localhost:${PORT}/`);
});