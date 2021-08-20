const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/todo-react-query')
  .then(() => console.log('Mongoose ok....'))
  .catch(err => console.log(err));

const todoRoutes = require('./routes/todo.routes');

app.use('/todo', todoRoutes);

app.listen(9090);
