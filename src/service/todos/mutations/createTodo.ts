import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import clientAxios from 'service/axios';
import { CreateTodo, CreateTodoResponseSuccess } from 'service/types/todos.types';

const createTodo = async (body: CreateTodo) => {
  const { data } = await clientAxios.post<CreateTodoResponseSuccess>(`todo/create`, body);

  return data;
};

export const useCreateTodo = (
  config?: UseMutationOptions<CreateTodoResponseSuccess, AxiosError, CreateTodo>
) => useMutation(createTodo, config);
