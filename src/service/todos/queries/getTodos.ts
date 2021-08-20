import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UseQueryOptions } from 'react-query/types/react/types';

import clientAxios from 'service/axios';
import { GetTodosResponseSuccess } from 'service/types/todos.types';

export const getTodosQueryKey = (params: Record<string, unknown>) => ['get-todos', params];

const getTodos = async (params: Record<string, unknown>) => {
  const { data } = await clientAxios.get<GetTodosResponseSuccess>(`todo/list`, { params });

  return data;
};

export const useGetTodos = (
  params: Record<string, unknown>,
  config?: UseQueryOptions<GetTodosResponseSuccess, AxiosError>
) =>
  useQuery({
    queryKey: getTodosQueryKey(params),
    queryFn: () => getTodos(params),
    ...(config || {}),
  });
