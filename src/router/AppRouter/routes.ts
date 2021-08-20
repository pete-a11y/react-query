import { lazy } from 'react';

import { routeNames } from './routeNames';

const TodoListPage = lazy(() => import('pages/TodoListPage/TodoListPage'));
const CreateTodoPage = lazy(() => import('pages/CreateTodoPage/CreateTodoPage'));
const EditTodoPage = lazy(() => import('pages/EditTodoPage/EditTodoPage'));

export const routes: Array<{
  path: string;
  exact?: boolean;
  component: React.LazyExoticComponent<React.FC>;
}> = [
  { path: routeNames.todos, exact: true, component: TodoListPage },
  { path: routeNames.create, component: CreateTodoPage },
  { path: routeNames.edit, component: EditTodoPage },
];
