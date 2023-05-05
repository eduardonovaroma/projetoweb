const express = require("express");
const app = express();
const webRouter = require("./routes/web");

const public_path = "public";
const views_path = "views";

app.use(express.static(public_path));
app.set("view engine", "ejs");
app.set("views", [
    views_path
]);

app.use('/', webRouter);

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Servidor web iniciado na porta: ${PORT}`);
});