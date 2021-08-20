export interface TodoListFooterProps {
  mode: 'add' | 'create' | 'edit';
  onClick?: () => void;
  disabled?: boolean;
}
