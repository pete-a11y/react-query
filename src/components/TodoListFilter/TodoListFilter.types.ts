import {
  TodoListFiltersProviderContext,
  TodoListFilterForm,
} from 'providers/TodoListFiltersProvider/TodoListFiltersProvider.types';

export interface TodoListFilterProps
  extends Omit<TodoListFiltersProviderContext, 'changeFieldValue'> {
  onChangeSortProperty: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: TodoListFilterForm['sortProperty']
  ) => void;
  onChangeVariant: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: TodoListFilterForm['variant']
  ) => void;
  onChangeSortVariant: () => void;
}
