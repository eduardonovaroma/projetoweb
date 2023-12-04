const useTaskRepository = require("../../app/repositories/TasksRepository");

const tasksRepository = useTaskRepository(); 
const axios = require('axios');

const http_request = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
  },
});

test('testa a listagem de tasks', async () => {

  const response = await http_request.get("tasks");
  const tasks = response.data;

  expect(response.status).toBe(200);
  expect(tasks.length).toBeGreaterThan(0);
});

test('testa a criação de uma task', async () => {

  const nova_task = {
    title: "Fazer compras",
    description: "Comprar café, pão e leite",
    done: false,
  };

  const response = await http_request.post("tasks", nova_task);
  const task = response.data;

  expect(response.status).toBe(201);
  expect(task.id).toBeGreaterThan(0);
  expect(task.title).toEqual(nova_task.title);
  expect(task.description).toEqual(nova_task.description);

});

test('testa não permitir a criação de uma task sem título', async () => {

  const nova_task = {
    title: "",
    description: "Comprar café, pão e leite",
    done: false,
  };

  await http_request.post("tasks", nova_task)
  .catch(error => {
    expect(error.response.data[0].message).toEqual('"title" is not allowed to be empty');
    expect(error.response.status).toBe(400);
  });

});

test('testa o retono de uma task pelo id', async () => {

  const response = await http_request.get("tasks/1");
  const task = response.data;

  expect(response.status).toBe(200);
  expect(task.title).not.toEqual("");
});

test('testa a atualização uma Task existente', async () => {
  let response, task;

  const nova_task = {
    title: "Fazer compras",
    description: "Comprar café, pão e leite",
    done: false,
  };

  response = await http_request.post("tasks", nova_task);
  task = response.data;
  expect(response.status).toBe(201);

  response = await http_request.put(`tasks/${task.id}`, {
    title: "Fazer compras 123",
    description: "Comprar café, pão e leite 123",
    done: false,
  });

  expect(response.status).toBe(200);

  response = await http_request.get(`tasks/${task.id}`);
  task = response.data;

  expect(response.status).toBe(200);
  expect(task.title).not.toEqual(nova_task.title);
  expect(task.description).not.toEqual(nova_task.description);
});


test('testa a remoção de uma task pelo id', async () => {
  let response, task;

  const nova_task = {
    title: "Fazer compras",
    description: "Comprar café, pão e leite",
    done: false,
  };

  response = await http_request.post("tasks", nova_task);
  task = response.data;
  expect(response.status).toBe(201);

  response = await http_request.delete(`tasks/${task.id}`);
  expect(response.status).toBe(200);

  response = await http_request.get(`tasks/${task.id}`).catch(error => {
    expect(error.response.status).toBe(404);
    expect(error.response.data.message).toEqual("Tarefa não encontrada.");
  });

});


test('testa mudança do status', async () => {
  let response, task;

  const nova_task = {
    title: "Fazer compras mudança status",
    description: "Comprar café, pão e leite",
    done: false,
  };

  response = await http_request.post("tasks", nova_task);
  task = response.data;
  expect(response.status).toBe(201);

  response = await http_request.put(`tasks/${task.id}/update-status`, {
    done: true
  });
  expect(response.status).toBe(200);
  expect(response.data.message).toBe("Status da Tarefa atualizado.");

  response = await http_request.get(`tasks/${task.id}`);
  // console.log(response.data)
  expect(response.data.done).toBeTruthy();

});