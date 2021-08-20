import { lazy } from 'react';

import { routeNames } from 'router/AppRouter/routeNames';

import { OverlaysNames } from './OverlayProvider.types';

const TodoListFilterContainer = lazy(() => import('containers/TodoListFilterContainer'));

export const overlayNames: Record<string, OverlaysNames> = {
  [routeNames.todos]: 'TODO_FILTER',
};

export const overlayComponents: Record<OverlaysNames, React.FC | null> = {
  NULL: null,
  TODO_FILTER: TodoListFilterContainer,
};
