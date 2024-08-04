const Task = require('../models/task');

async function routes (fastify, options) {
  fastify.get('/tasks', async (request, reply) => {
    const tasks = await Task.find();
    return tasks;
  });

  fastify.post('/tasks', async (request, reply) => {
    const task = new Task(request.body);
    await task.save();
    return task;
  });

  fastify.put('/tasks/:id', async (request, reply) => {
    const task = await Task.findByIdAndUpdate(request.params.id, request.body, { new: true });
    return task;
  });

  fastify.delete('/tasks/:id', async (request, reply) => {
    await Task.findByIdAndDelete(request.params.id);
    return { status: 'Task deleted' };
  });
}

module.exports = routes;
