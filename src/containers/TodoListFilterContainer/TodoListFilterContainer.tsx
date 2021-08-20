import React, { useCallback } from 'react';

import TodoListFilter from 'components/TodoListFilter';
import { useTodoFilters } from 'providers/TodoListFiltersProvider';
import { TodoListFilterForm } from 'providers/TodoListFiltersProvider/TodoListFiltersProvider.types';

const TodoListFilterContainer: React.FC = () => {
  const { changeFieldValue, ...todoFiltersProps } = useTodoFilters();

  const handleChangeVariant = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>, value: TodoListFilterForm['variant']) => {
      changeFieldValue('variant', value);
    },
    [changeFieldValue]
  );

  const handleChangeSortProperty = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>, value: TodoListFilterForm['sortProperty']) => {
      changeFieldValue('sortProperty', value);
    },
    [changeFieldValue]
  );

  const handleChangeSortValue = useCallback(() => {
    const nextValue = todoFiltersProps.values.sortVariant === 'DESC' ? 'ASC' : 'DESC';
    changeFieldValue('sortVariant', nextValue);
  }, [changeFieldValue, todoFiltersProps.values.sortVariant]);

  return (
    <TodoListFilter
      {...todoFiltersProps}
      onChangeVariant={handleChangeVariant}
      onChangeSortProperty={handleChangeSortProperty}
      onChangeSortVariant={handleChangeSortValue}
    />
  );
};

export default TodoListFilterContainer;
