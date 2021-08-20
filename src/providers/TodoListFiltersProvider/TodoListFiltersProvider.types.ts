import { FormikHandlers, FormikHelpers } from 'formik';
import { Moment } from 'moment';

export type Priority = 'critical' | 'urgent' | 'common';

export interface TodoListFilterForm {
  date: string;
  sortProperty: 'date' | 'title' | 'description';
  sortVariant: 'ASC' | 'DESC';
  variant: 'all' | 'byDate';
  priority: 'critical' | 'urgent' | 'common' | 'all';
  title: string;
  description: string;
  done: boolean;
}

export interface TodoListFiltersProviderContext {
  values: TodoListFilterForm;
  urlParams: Record<string, unknown>;
  changeDate: (date: Moment | null) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleChange: FormikHandlers['handleChange'];
  changeFieldValue: FormikHelpers<TodoListFilterForm>['setFieldValue'];
}
