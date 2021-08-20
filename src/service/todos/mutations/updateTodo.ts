import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import clientAxios from 'service/axios';
import { UpdateTodo, UpdateTodoResponseSuccess, Todo } from 'service/types/todos.types';

const updateTodo = async (body: UpdateTodo) => {
  const { data } = await clientAxios.post<UpdateTodoResponseSuccess>(`todo/update`, body);

  return data;
};

export const useUpdateTodo = (
  config?: UseMutationOptions<UpdateTodoResponseSuccess, AxiosError, Todo>
) => useMutation(updateTodo, config);
