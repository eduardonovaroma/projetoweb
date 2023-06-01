const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)


module.exports = router;