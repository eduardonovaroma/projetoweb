const useTaskRepository = require("../app/repositories/TasksRepository");

const tasksRepository = useTaskRepository(); 

test('Listando tasks', async () => {
  const tasks = await tasksRepository.list();

  expect(tasks.length).toBeGreaterThan(0);
});

test('Adicionando uma nova Task', async () => {

  const task = await tasksRepository.save({
    title: "Fazer compras",
    description: "Comprar café, pão e leite"
  });

  expect(task.id).not.toBeNull();
});

test('Encontrando Task pelo ID', async () => {

  // Cria uma Task no banco
  const new_task = await tasksRepository.save({
    title: "Nova Task",
    description: "Nova descrição da Task"
  });

  const task = await tasksRepository.find(new_task.id);

  expect(task.id).not.toBeNull();
  expect(task.title).not.toBeNull();
});

test('Atualizando uma Task já existente', async () => {

  // Cria uma Task no banco
  const new_task = await tasksRepository.save({
    title: "Nova Task",
    description: "Nova descrição da Task"
  });

  // Busca a Task e altera
  const task = await tasksRepository.find(new_task.id);
  task.title = "Nova Task alterada";
  task.description = "Nova descrição da Task alterada";
  await task.save();

  // Busca a Task novamente e assegura que a alteração foi gravada no banco
  const updated_task = await tasksRepository.find(task.id);

  expect(updated_task.title).toBe("Nova Task alterada");
  expect(updated_task.description).toBe("Nova descrição da Task alterada");
});

test('Removendo Task do banco de dados', async () => {

  // Cria uma Task no banco
  const new_task = await tasksRepository.save({
    title: "Nova Task",
    description: "Nova descrição da Task"
  });

  // Remove a Task do banco
  await tasksRepository.remove(new_task.id);

  // Assegura que a Task foi removida
  const task = await tasksRepository.find(new_task.id);

  expect(task).toBeNull();
});

test('Atualizando o status da Task', async () => {

  // Cria uma Task no banco
  const new_task = await tasksRepository.save({
    title: "Nova Task Status",
    description: "Nova descrição da Task Status",
    done: false
  });

  // Remove a Task do banco
  await tasksRepository.updateStatus(new_task.id, true);

  // Assegura que o status da Task foi mudada
  const task = await tasksRepository.find(new_task.id);

  expect(task.done).toBeTruthy();
});