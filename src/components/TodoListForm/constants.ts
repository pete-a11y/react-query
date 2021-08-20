import moment from 'moment';

import { CreateTodo } from 'service/types/todos.types';

export const initialValues: CreateTodo = {
  date: moment().format('YYYY-MM-DD'),
  title: '',
  description: '',
  priority: 'common',
};
