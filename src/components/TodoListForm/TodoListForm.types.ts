import { FormikHandlers } from 'formik';
import { Moment } from 'moment';

import { CreateTodo } from 'service/types/todos.types';

export interface TodoListFormProps extends CreateTodo {
  onChange: FormikHandlers['handleChange'];
  onChangeDate: (date: Moment | null) => void;
  disabled: boolean;
  isEdit: boolean;
}
