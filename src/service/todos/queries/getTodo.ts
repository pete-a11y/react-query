import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UseQueryOptions } from 'react-query/types/react/types';

import clientAxios from 'service/axios';
import { GetTodoResponseSuccess } from 'service/types/todos.types';

export const getTodoQueryKey = (id: string) => ['get-todo', id];

const getTodo = async (id: string) => {
  const { data } = await clientAxios.get<GetTodoResponseSuccess>(`todo/${id}`);

  return data;
};

export const useGetTodo = (
  id: string,
  config?: UseQueryOptions<GetTodoResponseSuccess, AxiosError>
) =>
  useQuery({
    queryKey: getTodoQueryKey(id),
    queryFn: () => getTodo(id),
    ...(config || {}),
  });
