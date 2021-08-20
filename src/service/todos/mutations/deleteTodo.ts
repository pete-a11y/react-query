import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import clientAxios from 'service/axios';
import { DeleteTodoResponseSuccess } from 'service/types/todos.types';

const deleteTodo = async (id: string) => {
  const { data } = await clientAxios.delete<DeleteTodoResponseSuccess>(`todo/delete/${id}`);

  return data;
};

export const useDeleteTodo = (
  config?: UseMutationOptions<DeleteTodoResponseSuccess, AxiosError, string>
) =>
  useMutation(deleteTodo, {
    ...(config || {}),
  });
