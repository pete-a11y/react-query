import { Todo } from 'service/types/todos.types';

export interface TodoListItemProps extends Todo {
  onDelete: (id: string) => void;
  onCheckboxClick: (todo: Todo) => void;
  isDeleteLoading: boolean;
}
