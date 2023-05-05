const express = require("express");
const NavegacaoController = require("../controllers/NavegacaoController");
const router = express.Router();

const navegacaoController = NavegacaoController();

router.get('/', navegacaoController.index);
router.get('/usuarios', navegacaoController.usuarios);
router.get('/sobre', navegacaoController.sobre);

router.get('*', function notFound(request, response) {
    return response.render("404");
});


module.exports = router;