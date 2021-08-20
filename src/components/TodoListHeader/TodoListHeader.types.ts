import {
  TodoListFiltersProviderContext,
  TodoListFilterForm,
} from 'providers/TodoListFiltersProvider/TodoListFiltersProvider.types';

export interface TodoListHeaderProps {
  hideDataPicker: boolean;
  date: TodoListFilterForm['date'];
  title: TodoListFilterForm['title'];
  onChangeDate: TodoListFiltersProviderContext['changeDate'];
  onChange: TodoListFiltersProviderContext['handleChange'];
  onOpenFilters: () => void;
}
