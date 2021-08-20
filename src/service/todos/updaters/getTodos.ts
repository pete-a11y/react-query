import { queryClient } from 'providers/ApiProvider';
import { getTodosQueryKey } from 'service/todos';
import { ResponseSuccess } from 'service/types/common.types';
import { Todo } from 'service/types/todos.types';

export const deleteTodoById = (id: string, params: Record<string, unknown>) => {
  const queryKey = getTodosQueryKey(params);
  const cache = queryClient.getQueryData<ResponseSuccess<Todo[]>>(queryKey);

  if (cache) {
    const updatedTodoList = cache.body.filter(({ _id }) => _id !== id);
    queryClient.setQueryData(queryKey, {
      ...cache,
      body: updatedTodoList,
    });
  }
};

export const replaceTodo = (newTodo: Todo, params: Record<string, unknown>) => {
  const queryKey = getTodosQueryKey(params);
  const cache = queryClient.getQueryData<ResponseSuccess<Todo[]>>(queryKey);

  if (cache) {
    const todoIndex = cache.body.findIndex(({ _id }) => _id === newTodo._id);
    cache.body[todoIndex] = newTodo;

    queryClient.setQueryData(queryKey, cache);
  }
};
