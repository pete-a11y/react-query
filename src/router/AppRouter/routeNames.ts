export type RouteKeys = 'todos' | 'create' | 'edit';

export type RoutesValues = '/todos' | '/todo/create' | '/todo/edit/:id';

export const routeNames: Readonly<Record<RouteKeys, RoutesValues>> = {
  todos: '/todos',
  create: '/todo/create',
  edit: '/todo/edit/:id',
};
