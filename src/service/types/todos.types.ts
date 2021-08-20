import { ResponseSuccess } from './common.types';

export type Priority = 'critical' | 'urgent' | 'common';

export interface Todo {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  priority: Priority;
  date: string;
}

export type CreateTodo = Omit<Todo, '_id' | 'done'>;

export type UpdateTodo = Todo;

export type CreateTodoResponseSuccess = ResponseSuccess<Todo>;
export type DeleteTodoResponseSuccess = ResponseSuccess<Todo>;
export type UpdateTodoResponseSuccess = ResponseSuccess<Todo>;
export type GetTodoResponseSuccess = ResponseSuccess<Todo>;
export type GetTodosResponseSuccess = ResponseSuccess<Todo[]>;
