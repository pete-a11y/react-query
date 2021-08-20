import React from 'react';

import { Grid, List, LinearProgress } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './TodoListWrapper.styles';
import { TodoListWrapperProps } from './TodoListWrapper.types';

const TodoListWrapper: React.FC<TodoListWrapperProps> = ({ isLoading, children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {isLoading && (
        <Grid item xs={12}>
          <LinearProgress color="secondary" />
        </Grid>
      )}
      <Grid item xs={12} className={clsx({ [classes.progress]: isLoading })}>
        <List>{children}</List>
      </Grid>
    </Grid>
  );
};

export default TodoListWrapper;
