import React, { useCallback } from 'react';

import { useFormik } from 'formik';
import { Moment } from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import TodoListFooter from 'components/TodoListFooter';
import TodoListForm from 'components/TodoListForm';
import { initialValues } from 'components/TodoListForm/constants';
import { useCreateTodo, useGetTodo, useUpdateTodo } from 'service/todos';
import { CreateTodo } from 'service/types/todos.types';

import { getPrevFormValues } from './helpers';
import { TodoListFormContainerProps } from './TodoListFormContainer.types';

const TodoListFormContainer: React.FC<TodoListFormContainerProps> = ({ mode }) => {
  const history = useHistory();
  const { id } = useParams<{ id?: string }>();
  const isEdit = mode === 'edit';

  const handleSuccess = useCallback(() => {
    history.push('/todos');
  }, [history]);

  const { data: { body: prevTodo } = {} } = useGetTodo(id as string, { enabled: !!id && isEdit });

  const { mutate: createTodo, isLoading: isCreateLoading } = useCreateTodo({
    onSuccess: handleSuccess,
  });

  const { mutate: updateTodo, isLoading: isUpdateLoading } = useUpdateTodo({
    onSuccess: handleSuccess,
  });

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik<CreateTodo>({
    initialValues: isEdit && prevTodo ? getPrevFormValues(prevTodo) : initialValues,
    enableReinitialize: true,
    onSubmit: data => {
      if (isEdit && prevTodo) {
        updateTodo({ ...prevTodo, ...data });
      } else {
        createTodo(data);
      }
    },
  });

  const handleChangeDate = useCallback(
    (date: Moment | null) => {
      if (!date) return;
      setFieldValue('date', date.format('YYYY-MM-DD'));
    },
    [setFieldValue]
  );

  return (
    <>
      <TodoListForm
        {...values}
        isEdit={isEdit}
        onChange={handleChange}
        onChangeDate={handleChangeDate}
        disabled={isCreateLoading || isUpdateLoading}
      />
      <TodoListFooter
        mode="create"
        onClick={handleSubmit}
        disabled={isCreateLoading || isUpdateLoading}
      />
    </>
  );
};

export default TodoListFormContainer;
