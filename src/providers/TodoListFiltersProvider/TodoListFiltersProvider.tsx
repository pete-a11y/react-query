import React, { createContext, useCallback, useContext } from 'react';

import { Moment } from 'moment';

import { useFormikWithQS } from 'hooks';
import { routeNames } from 'router/AppRouter/routeNames';

import { initialValues } from './constants';
import {
  TodoListFiltersProviderContext,
  TodoListFilterForm,
} from './TodoListFiltersProvider.types';

const TodoListContext = createContext<TodoListFiltersProviderContext>({
  values: initialValues,
  urlParams: {},
  handleChange: () => {
    throw new Error('error in TodoListFiltersProviderContext with handleChange');
  },
  handleSubmit: () => {
    throw new Error('error in TodoListFiltersProviderContext with handleSubmit');
  },
  changeDate: () => {
    throw new Error('error in TodoListFiltersProviderContext with changeDate');
  },
  changeFieldValue: () => {
    throw new Error('error in TodoListFiltersProviderContext with changeDate');
  },
});

export const useTodoFilters = (): TodoListFiltersProviderContext => useContext(TodoListContext);

const TodoListFiltersProvider: React.FC = ({ children }) => {
  const {
    values,
    urlParams,
    handleChange,
    handleSubmit,
    setFieldValue: changeFieldValue,
  } = useFormikWithQS<TodoListFilterForm>(
    {
      initialValues,
      onSubmit: () => {
        // eslint-disable-next-line
        return;
      },
    },
    routeNames.todos
  );

  const changeDate = useCallback(
    (date: Moment | null) => {
      if (!date) return;
      changeFieldValue('date', date.format('YYYY-MM-DD'));
    },
    [changeFieldValue]
  );

  return (
    <TodoListContext.Provider
      value={{ values, urlParams, handleChange, handleSubmit, changeDate, changeFieldValue }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListFiltersProvider;
