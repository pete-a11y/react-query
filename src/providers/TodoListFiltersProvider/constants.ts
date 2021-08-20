import moment from 'moment';

import { TodoListFilterForm } from './TodoListFiltersProvider.types';

export const initialValues: TodoListFilterForm = {
  date: moment().format('YYYY-MM-DD'),
  sortProperty: 'title',
  sortVariant: 'DESC',
  variant: 'all',
  priority: 'all',
  title: '',
  description: '',
  done: false,
};
