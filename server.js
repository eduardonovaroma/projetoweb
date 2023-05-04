const express = require("express");

const app = express();

app.use('/teste', function(request, response) {
    response.send("Hello!")
});

app.listen(3000);