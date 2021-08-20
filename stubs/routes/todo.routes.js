const express = require('express');
const router = express.Router();

const { handleFormError, handleSuccess, handleError } = require('../helpers/handlers');
const TodoModel = require('../models/todos');

router.get('/list', async (req, res) => {
  const data = await TodoModel.getAll(req.query);
  res.send(handleSuccess(data));
});

router.get('/:id', async (req, res) => {
  const data = await TodoModel.getById(req.params.id);

  if (data) return res.send(handleSuccess(data));
  return res.send(handleError('с таким id нет'));
});

router.post('/create', async (req, res) => {
  try {
    const data = await TodoModel.create(req.body);

    res.send(handleSuccess(data));
  } catch (err) {
    res.send(handleFormError(err));
  }
});

router.post('/update', async (req, res) => {
  try {
    const data = await TodoModel.update(req.body);

    res.send(handleSuccess(data));
  } catch (err) {
    res.send(handleFormError(err));
  }
});

router.delete('/delete/:id', async (req, res) => {
  const data = await TodoModel.deleteById(req.params.id);

  if (data) return res.send(handleSuccess(data));
  return res.send(handleError('с таким id нет'));
});

module.exports = router;
