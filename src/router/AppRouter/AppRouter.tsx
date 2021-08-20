import React, { Suspense } from 'react';

import { CircularProgress, Grid } from '@material-ui/core';
import { Switch, Redirect, Route } from 'react-router-dom';

import { routes } from './routes';

const AppRouter: React.FC = () => {
  return (
    <Suspense
      fallback={
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      }
    >
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="*">
          <Redirect to="/todos" />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
