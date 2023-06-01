const express = require("express");
const router = express.Router();

const NavegacaoController = require("../app/controllers/NavegacaoController");
const TasksController = require("../app/controllers/TasksController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/create', TasksController.create)
router.post('/tasks/save', TasksController.save)
router.post('/tasks/remove/:id', TasksController.remove)
router.get('/tasks/edit/:id', TasksController.edit)
router.post('/tasks/update', TasksController.update)
router.post('/tasks/update-status/:id', TasksController.updateStatus)


router.get('/', NavegacaoController.index);
router.get('/usuarios', NavegacaoController.usuarios);
router.get('/sobre', NavegacaoController.sobre);



router.get('*', function notFound(request, response) {
    return response.render("404");
});


module.exports = router;