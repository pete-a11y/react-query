import { Todo, CreateTodo } from 'service/types/todos.types';

export const getPrevFormValues = ({ description, title, priority, date }: Todo): CreateTodo => ({
  description,
  title,
  priority,
  date,
});
