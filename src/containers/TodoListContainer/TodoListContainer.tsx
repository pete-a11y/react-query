import React, { useMemo, useCallback, useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

import TodoListFooter from 'components/TodoListFooter';
import TodoListHeader from 'components/TodoListHeader';
import TodoListItem from 'components/TodoListItem';
import TodoListWrapper from 'components/TodoListWrapper';
import { useOverlays } from 'providers/OverlayProvider';
import { useTodoFilters } from 'providers/TodoListFiltersProvider';
import { useDeleteTodo, useGetTodos, useUpdateTodo, todoUpdaters } from 'service/todos';
import { Todo } from 'service/types/todos.types';

const TodoListContainer: React.FC = () => {
  const [deletingTasks, setTaskForDeleting] = useState<string[]>([]);
  const { values, urlParams: params, changeDate, handleChange, handleSubmit } = useTodoFilters();
  const { openOverlay } = useOverlays();

  const { data: { body: todoList = [] } = {}, isLoading } = useGetTodos(params, {
    enabled: !!Object.values(params).length,
  });

  const { mutate: deleteTodo, isLoading: isDeleteLoading } = useDeleteTodo({
    onMutate: id => {
      setTaskForDeleting(ids => [...ids, id]);
    },
    onSuccess: todo => {
      todoUpdaters.deleteTodoById(todo.body._id, params);
      setTaskForDeleting(ids => ids.filter(id => id !== todo.body._id));
    },
  });

  const { mutate: updateTodo } = useUpdateTodo({
    onMutate: newTodo => {
      todoUpdaters.replaceTodo(newTodo, params);
    },
  });

  const handleDeleteTodo = useCallback(
    (id: string) => {
      deleteTodo(id);
    },
    [deleteTodo]
  );

  const handleCheckboxClick = useCallback(
    (todo: Todo) => {
      updateTodo(todo);
    },
    [updateTodo]
  );

  const debouncedSubmit = useMemo(
    () =>
      debounce(() => {
        handleSubmit();
      }, 500),
    [handleSubmit]
  );

  useEffect(() => {
    debouncedSubmit();
  }, [debouncedSubmit, values]);

  return (
    <>
      <TodoListHeader
        date={values.date}
        title={values.title}
        hideDataPicker={values.variant === 'all'}
        onChange={handleChange}
        onChangeDate={changeDate}
        onOpenFilters={openOverlay}
      />
      <TodoListWrapper isLoading={isLoading}>
        {todoList.map(task => (
          <TodoListItem
            key={task._id}
            {...task}
            onCheckboxClick={handleCheckboxClick}
            onDelete={handleDeleteTodo}
            isDeleteLoading={isDeleteLoading && deletingTasks.includes(task._id)}
          />
        ))}
      </TodoListWrapper>
      <TodoListFooter mode="add" />
    </>
  );
};

export default TodoListContainer;
