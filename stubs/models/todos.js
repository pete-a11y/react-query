const mongoose = require('mongoose');
const qs = require('query-string');

const { TodoModelSchema } = require('./todos.schema');
const { getFiltersAndSortParams } = require('../helpers/getTodoFilters');

const TodoModel = mongoose.model('TodoModel', TodoModelSchema);

class Todo {
  async getAll(query = {}) {
    const { filters, sort } = getFiltersAndSortParams(query);

    return await TodoModel.find(filters).sort(sort);
  }

  async getById(id) {
    return await TodoModel.findById(id);
  }

  async deleteById(id) {
    return await TodoModel.findByIdAndRemove(id);
  }

  async create(todo) {
    const newTodo = { ...todo, done: false };
    try {
      const data = TodoModel.create(newTodo);

      return data;
    } catch (err) {
      return err;
    }
  }

  async update(todo) {
    try {
      const data = TodoModel.findByIdAndUpdate({ _id: todo._id }, todo, {
        runValidators: true,
      });

      return data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new Todo();
